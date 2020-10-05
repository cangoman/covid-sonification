INSERT INTO compositions (title, state, user_id, created_on) VALUES 
  ( 'Minuet in Covid Minor', 
    '{  "dates": { "startDate": "2020-06-01",
                  "endDate": "2020-06-30" },
        "interval": 3000,
        "query": ["Afghanistan","Albania","Andorra","Angola","Argentina"]
     }',
     1,
     to_timestamp('29 Sep 2020', 'DD Mon YYYY')
  );

  INSERT INTO compositions (title, state, user_id, created_on) VALUES 
  ( 'A Midsummers Night Covid', 
    '{  "dates": { "startDate": "2020-06-22",
                  "endDate": "2020-09-21" },
        "interval": 1500,
        "query": ["France", "Spain", "Greece", "Italy", "United Kingdom", "Portugal", "Germany"]
     }',
     1,
     to_timestamp('3 Oct 2020', 'DD Mon YYYY')
  );


  INSERT INTO compositions (title, state, user_id, created_on) VALUES 
  ( 'South American Covid Symphony', 
    '{  "dates": { "startDate": "2020-04-01",
                  "endDate": "2020-07-31" },
        "interval": 2500,
        "query": ["Brazil","Colombia","Argentina","Ecuador","Chile"]
     }',
     1,
     NOW()
  );

    INSERT INTO compositions (title, state, user_id, created_on) VALUES 
  ( 'Putins Vaccine', 
    '{  "dates": { "startDate": "2020-08-01",
                  "endDate": "2020-10-01" },
        "interval": 1000,
        "query": ["United States of America","Russian Federation", "Ukraine","kazakhstan"]
     }',
     1,
     NOW()
  );

    INSERT INTO compositions (title, state, user_id, created_on) VALUES 
  ( 'Sibelius, Grieg and Debussy go viral', 
    '{  "dates": { "startDate": "2020-04-01",
                  "endDate": "2020-09-01" },
        "interval": 2000,
        "query": ["Finland","Norway", "France", "Sweden", "Denmark"]
     }',
     1,
     to_timestamp('20 Sep 2020', 'DD Mon YYYY')
  );