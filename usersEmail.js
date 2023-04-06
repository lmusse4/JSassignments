let emailApp = {
    name: 'Gmail',
    mailboxes: [
      {
        name: "Inbox",
        emails: [
          {
            from: "example1@example.com",
            to: ["you@example.com"],
            subject: "Hi! This is my subject",
            body: "This is also the body email.",
          },
          {
            from: "example2@example.com",
            to: ["you@example.com"],
            subject: "Another subject",
            body: "Another body email.",
          },
        ],
      },
      {
        name: "Sent",
        emails: [
          {
            from: "you@example.com",
            to: ["example1@example.com"],
            subject: "RE: Something Important",
            body: "Thanks for the email!",
          },
        ],
      },
    ],
    contacts: [
      {
        name: "John",
        email: "John@example.com",
      },
      {
        name: "Kayone",
        email: "Kayone@example.com",
      },
      {
        name: "Kenny",
        email: "Kenny@example.com",
      },
    ],
  };
  