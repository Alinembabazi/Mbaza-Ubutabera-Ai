
import { useState } from 'react'
import './App.css'

import {
  MOCK_TOPICS,
  type Category,
  type Topic,
} from './data/mockTopics'

const categories: Array<Category | 'All'> = [
  'All',
  'Labour',
  'Land',
  'Family',
  'Business',
]

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTopics = MOCK_TOPICS.topics.filter((topic: Topic) => {
    const matchesCategory =
      selectedCategory === 'All' || topic.category === selectedCategory

    const normalizedSearch = searchQuery.trim().toLowerCase()
    const matchesSearch =
      normalizedSearch === '' ||
      topic.title.toLowerCase().includes(normalizedSearch) ||
      topic.summary.toLowerCase().includes(normalizedSearch)

    return matchesCategory && matchesSearch
  })

  return (
    <main className="app-shell">
      <header className="app-header">
        <div className="brand-row">
          <div className="brand-mark" aria-label="Mbaza Ubutabera logo">
            M
          </div>

          <div className="brand-copy">
            <h1>Mbaza Ubutabera</h1>
            <p>Legal topics</p>
          </div>
        </div>

        <label className="search-field" htmlFor="topic-search">
          <span className="search-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16 16L21 21" />
            </svg>
          </span>
          <input
            id="topic-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search topics, e.g. dismissal"
            aria-label="Search legal topics"
          />
        </label>
      </header>

      <section className="topics-section" aria-label="Legal topics list">
        <div className="filter-row" aria-label="Filter topics by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-chip ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="topic-count" aria-live="polite">
          {filteredTopics.length} {filteredTopics.length === 1 ? 'topic' : 'topics'}
        </p>

        {filteredTopics.length > 0 ? (
          <div className="topics-list">
            {filteredTopics.map((topic) => (
              <article key={topic.id} className="topic-card">
                <div className="topic-card-top">
                  <span className="topic-category">{topic.category}</span>

                  {topic.isPopular && (
                    <span className="popular-badge" aria-label="Popular topic">
                      <span className="star">★</span>
                      Popular
                    </span>
                  )}
                </div>

                <h2>{topic.title}</h2>
                <p className="topic-summary">{topic.summary}</p>

                <p className="law-reference">
                  <span className="reference-mark">▣</span>
                  {topic.lawReference}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state" role="status" aria-live="polite">
            <h3>No topics found</h3>
            <p>Try another search term or select a different category.</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
