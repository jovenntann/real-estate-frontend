export const mails = [
    {
      id: '7c84fb90-12c4-11e1-840d-7b25c5ee775a',
      name: 'John Doe',
      email: 'johndoe@example.com',
      subject: 'Project Discussion',
      text: 'Hello, I would like to discuss the project details with you. I have some suggestions that might be beneficial for the project. Let\'s schedule a meeting to discuss this further.',
      date: '2023-10-22T11:00:00',
      read: false,
      labels: ['meeting', 'work'],
      chats: [
        { role: 'agent', source: 'messenger', message: 'Greetings! How can I assist you today?', timestamp: '2023-10-22T11:01:00' },
        { role: 'user', source: 'messenger', message: 'I would like to discuss the project details.', timestamp: '2023-10-22T11:02:00' },
        { role: 'agent', source: 'messenger', message: 'Sure, I would be happy to discuss the project with you.', timestamp: '2023-10-22T11:03:00' },
        { role: 'user', source: 'messenger', message: 'Great! When can we schedule the meeting?', timestamp: '2023-10-22T11:04:00' },
        { role: 'agent', source: 'messenger', message: 'How about tomorrow at 10 AM?', timestamp: '2023-10-22T11:05:00' },
        { role: 'user', source: 'messenger', message: 'That works for me. See you then.', timestamp: '2023-10-22T11:06:00' },
        { role: 'agent', source: 'messenger', message: 'Great! Looking forward to our meeting.', timestamp: '2023-10-22T11:07:00' },
        { role: 'user', source: 'text', message: 'Thank you for scheduling the meeting.', timestamp: '2023-10-22T11:08:00' },
        { role: 'agent', source: 'text', message: 'You\'re welcome! If you have any other questions, feel free to ask.', timestamp: '2023-10-22T11:09:00' },
        { role: 'user', source: 'text', message: 'No, that would be all for now. Thanks!', timestamp: '2023-10-22T11:10:00' },
        { role: 'agent', source: 'text', message: 'Alright, have a great day!', timestamp: '2023-10-22T11:11:00' },
      ],
    },
    {
      id: '7c84fb90-12c4-11e1-840d-7b25c5ee775b',
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      subject: 'Project Proposal',
      text: 'Hello, I have a project proposal that I would like to discuss with you. I believe it could be a great opportunity for us. Can we schedule a meeting to discuss this further?',
      date: '2023-10-23T11:00:00',
      read: true,
      labels: ['meeting', 'work'],
      chats: [
        { role: 'agent', source: 'messenger', message: 'Hello! How can I assist you today?', timestamp: '2023-10-23T11:01:00' },
        { role: 'user', source: 'messenger', message: 'I have a project proposal to discuss.', timestamp: '2023-10-23T11:02:00' },
        { role: 'agent', source: 'messenger', message: 'Sure, I would be happy to discuss the project with you.', timestamp: '2023-10-23T11:03:00' },
        { role: 'user', source: 'messenger', message: 'Great! When can we schedule the meeting?', timestamp: '2023-10-23T11:04:00' },
        { role: 'agent', source: 'messenger', message: 'How about tomorrow at 11 AM?', timestamp: '2023-10-23T11:05:00' },
        { role: 'user', source: 'messenger', message: 'That works for me. See you then.', timestamp: '2023-10-23T11:06:00' },
        { role: 'agent', source: 'messenger', message: 'Great! Looking forward to our meeting.', timestamp: '2023-10-23T11:07:00' },
      ],
    },
    {
      id: '7c84fb90-12c4-11e1-840d-7b25c5ee775c',
      name: 'Robert Smith',
      email: 'robertsmith@example.com',
      subject: 'Technical Issue',
      text: 'Hello, I am facing a technical issue with the software. Can you please assist me?',
      date: '2023-10-24T11:00:00',
      read: true,
      labels: ['support', 'technical'],
      chats: [
        { role: 'agent', source: 'messenger', message: 'Hello! How can I assist you today?', timestamp: '2023-10-24T11:01:00' },
        { role: 'user', source: 'messenger', message: 'I am facing a technical issue with the software.', timestamp: '2023-10-24T11:02:00' },
        { role: 'agent', source: 'messenger', message: 'I am sorry to hear that. Can you please provide more details about the issue?', timestamp: '2023-10-24T11:03:00' },
        { role: 'user', source: 'messenger', message: 'The software crashes every time I try to save my work.', timestamp: '2023-10-24T11:04:00' },
        { role: 'agent', source: 'messenger', message: 'I understand. Let me look into this issue for you.', timestamp: '2023-10-24T11:05:00' },
        { role: 'user', source: 'messenger', message: 'Thank you for your assistance.', timestamp: '2023-10-24T11:06:00' },
        { role: 'agent', source: 'messenger', message: 'You\'re welcome! I will update you as soon as I have more information.', timestamp: '2023-10-24T11:07:00' },
      ],
    },
    {
      id: '7c84fb90-12c4-11e1-840d-7b25c5ee775d',
      name: 'John Doe',
      email: 'johndoe@example.com',
      subject: 'Account Issue',
      text: 'Hello, I am having trouble accessing my account. Can you please assist me?',
      date: '2023-10-25T11:00:00',
      read: false,
      labels: ['support', 'account'],
      chats: [
        { role: 'agent', source: 'messenger', message: 'Hello! How can I assist you today?', timestamp: '2023-10-25T11:01:00' },
        { role: 'user', source: 'messenger', message: 'I am having trouble accessing my account.', timestamp: '2023-10-25T11:02:00' },
        { role: 'agent', source: 'messenger', message: 'I am sorry to hear that. Can you please provide more details about the issue?', timestamp: '2023-10-25T11:03:00' },
        { role: 'user', source: 'messenger', message: 'My login credentials are not being recognized.', timestamp: '2023-10-25T11:04:00' },
        { role: 'agent', source: 'messenger', message: 'I understand. Let me look into this issue for you.', timestamp: '2023-10-25T11:05:00' },
        { role: 'user', source: 'messenger', message: 'Thank you for your assistance.', timestamp: '2023-10-25T11:06:00' },
        { role: 'agent', source: 'messenger', message: 'You\'re welcome! I will update you as soon as I have more information.', timestamp: '2023-10-25T11:07:00' },
      ],
    },
    {
      id: '7c84fb90-12c4-11e1-840d-7b25c5ee775e',
      name: 'Emma Johnson',
      email: 'emmajohnson@example.com',
      subject: 'Project Discussion',
      text: 'Hello, I would like to discuss a potential project with you. Can we schedule a meeting?',
      date: '2023-10-26T11:00:00',
      read: false,
      labels: ['meeting', 'work'],
      chats: [
        { role: 'agent', source: 'messenger', message: 'Hello! How can I assist you today?', timestamp: '2023-10-26T11:01:00' },
        { role: 'user', source: 'messenger', message: 'I would like to discuss a potential project.', timestamp: '2023-10-26T11:02:00' },
        { role: 'agent', source: 'messenger', message: 'Sure, I would be happy to discuss the project with you.', timestamp: '2023-10-26T11:03:00' },
        { role: 'user', source: 'messenger', message: 'Great! When can we schedule the meeting?', timestamp: '2023-10-26T11:04:00' },
        { role: 'agent', source: 'messenger', message: 'How about tomorrow at 11 AM?', timestamp: '2023-10-26T11:05:00' },
        { role: 'user', source: 'messenger', message: 'That works for me. See you then.', timestamp: '2023-10-26T11:06:00' },
        { role: 'agent', source: 'messenger', message: 'Great! Looking forward to our meeting.', timestamp: '2023-10-26T11:07:00' },
      ],
    },
    {
      id: '7c84fb90-12c4-11e1-840d-7b25c5ee775f',
      name: 'Liam Wilson',
      email: 'liamwilson@example.com',
      subject: 'Software Feedback',
      text: 'Hello, I have some feedback regarding the software. Can we schedule a call to discuss this?',
      date: '2023-10-27T11:00:00',
      read: false,
      labels: ['feedback', 'software'],
      chats: [
        { role: 'agent', source: 'messenger', message: 'Hello! How can I assist you today?', timestamp: '2023-10-27T11:01:00' },
        { role: 'user', source: 'messenger', message: 'I have some feedback regarding the software.', timestamp: '2023-10-27T11:02:00' },
        { role: 'agent', source: 'messenger', message: 'Sure, I would be happy to hear your feedback.', timestamp: '2023-10-27T11:03:00' },
        { role: 'user', source: 'messenger', message: 'Great! When can we schedule the call?', timestamp: '2023-10-27T11:04:00' },
        { role: 'agent', source: 'messenger', message: 'How about tomorrow at 10 AM?', timestamp: '2023-10-27T11:05:00' },
        { role: 'user', source: 'messenger', message: 'That works for me. See you then.', timestamp: '2023-10-27T11:06:00' },
        { role: 'agent', source: 'messenger', message: 'Great! Looking forward to our call.', timestamp: '2023-10-27T11:07:00' },
      ],
    },
  ]
  
  export type Mail = (typeof mails)[number]
  
  export const accounts = [
    {
      label: 'Alicia Koch',
      email: 'alicia@example.com',
      icon: 'ion:logo-vercel',
    },
    {
      label: 'Alicia Koch',
      email: 'alicia@gmail.com',
      icon: 'mdi:google',
    },
    {
      label: 'Alicia Koch',
      email: 'alicia@me.com',
      icon: 'bx:bxl-gmail',
    },
  ]
  
  export type Account = (typeof accounts)[number]
  
  export const contacts = [
    {
      name: 'Emma Johnson',
      email: 'emma.johnson@example.com',
    },
    {
      name: 'Liam Wilson',
      email: 'liam.wilson@example.com',
    },
    {
      name: 'Olivia Davis',
      email: 'olivia.davis@example.com',
    },
    {
      name: 'Noah Martinez',
      email: 'noah.martinez@example.com',
    },
    {
      name: 'Ava Taylor',
      email: 'ava.taylor@example.com',
    },
    {
      name: 'Lucas Brown',
      email: 'lucas.brown@example.com',
    },
    {
      name: 'Sophia Smith',
      email: 'sophia.smith@example.com',
    },
    {
      name: 'Ethan Wilson',
      email: 'ethan.wilson@example.com',
    },
    {
      name: 'Isabella Jackson',
      email: 'isabella.jackson@example.com',
    },
    {
      name: 'Mia Clark',
      email: 'mia.clark@example.com',
    },
    {
      name: 'Mason Lee',
      email: 'mason.lee@example.com',
    },
    {
      name: 'Layla Harris',
      email: 'layla.harris@example.com',
    },
    {
      name: 'William Anderson',
      email: 'william.anderson@example.com',
    },
    {
      name: 'Ella White',
      email: 'ella.white@example.com',
    },
    {
      name: 'James Thomas',
      email: 'james.thomas@example.com',
    },
    {
      name: 'Harper Lewis',
      email: 'harper.lewis@example.com',
    },
    {
      name: 'Benjamin Moore',
      email: 'benjamin.moore@example.com',
    },
    {
      name: 'Aria Hall',
      email: 'aria.hall@example.com',
    },
    {
      name: 'Henry Turner',
      email: 'henry.turner@example.com',
    },
    {
      name: 'Scarlett Adams',
      email: 'scarlett.adams@example.com',
    },
  ]
  
  export type Contact = (typeof contacts)[number]