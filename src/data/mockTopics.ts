export type Category = 'Labour' | 'Land' | 'Family' | 'Business';

export interface Topic {
  id: number;
  category: Category;
  title: string;
  summary: string;
  lawReference: string;
  isPopular: boolean;
}

export interface TopicsResponse {
  count: number;
  topics: Topic[];
}

export const MOCK_TOPICS: TopicsResponse = {
  count: 12,
  topics: [
    {
      id: 1,
      category: 'Labour',
      title: 'Dismissal without notice',
      summary:
        'An employer must give notice before ending a work contract, except in case of serious misconduct.',
      lawReference: 'Law No. 66/2018 regulating labour',
      isPopular: true,
    },
    {
      id: 2,
      category: 'Land',
      title: 'Transferring land ownership',
      summary:
        'Steps and documents needed to sell, donate, or inherit registered land in Rwanda.',
      lawReference: 'Law No. 27/2021 governing land',
      isPopular: true,
    },
    {
      id: 3,
      category: 'Family',
      title: 'Child support after separation',
      summary:
        "Who pays for a child's needs after parents separate, and how amounts are decided by a court.",
      lawReference: 'Law governing persons and family',
      isPopular: false,
    },
    {
      id: 4,
      category: 'Business',
      title: 'Registering a new company',
      summary:
        'Requirements and steps to register a private limited company or sole proprietorship at RDB.',
      lawReference: 'Law No. 007/2021 governing companies',
      isPopular: true,
    },
    {
      id: 5,
      category: 'Labour',
      title: 'Maternity and paternity leave',
      summary:
        'Duration of paid leave an employee is entitled to before and after the birth of a child.',
      lawReference: 'Law No. 66/2018 regulating labour',
      isPopular: false,
    },
    {
      id: 6,
      category: 'Land',
      title: 'Land dispute resolution',
      summary:
        'How to report and resolve a boundary dispute or conflicting claim on registered land.',
      lawReference: 'Law No. 27/2021 governing land',
      isPopular: false,
    },
    {
      id: 7,
      category: 'Family',
      title: 'Marriage registration',
      summary:
        'Documents required and process to register a civil marriage at the local sector office.',
      lawReference: 'Law governing persons and family',
      isPopular: false,
    },
    {
      id: 8,
      category: 'Business',
      title: 'Business licence renewal',
      summary:
        'How and when to renew an operating licence to stay compliant and avoid penalties.',
      lawReference: 'Law No. 007/2021 governing companies',
      isPopular: false,
    },
    {
      id: 9,
      category: 'Labour',
      title: 'Overtime pay rules',
      summary:
        'When overtime applies, the minimum rate employers must pay, and how to claim unpaid overtime.',
      lawReference: 'Law No. 66/2018 regulating labour',
      isPopular: false,
    },
    {
      id: 10,
      category: 'Land',
      title: 'Leasing agricultural land',
      summary:
        'Rules for renting farmland, maximum lease durations, and tenant protections under Rwandan law.',
      lawReference: 'Law No. 27/2021 governing land',
      isPopular: false,
    },
    {
      id: 11,
      category: 'Family',
      title: 'Inheritance without a will',
      summary:
        'How an estate is divided among surviving relatives when the deceased left no written will.',
      lawReference: 'Law governing persons and family',
      isPopular: true,
    },
    {
      id: 12,
      category: 'Business',
      title: 'Employee contracts requirements',
      summary:
        'What a valid employment contract must include to be enforceable under Rwandan labour law.',
      lawReference: 'Law No. 66/2018 regulating labour',
      isPopular: false,
    },
  ],
};
