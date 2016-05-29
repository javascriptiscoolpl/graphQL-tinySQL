# Description

This is tiny "SQL" implementation using [GraphQL](http://graphql.org/).

# Install

    git clone https://github.com/javascriptiscoolpl/graphQL-tinySQL.git
    cd graphQL-tinySQL
    npm install

# Usage - run server

Start server with command:

    node index.js

# Usage - GraphQL query samples

Go to http://localhost:3000/graphql and run GraphQL query.

### sortBy

###### sample1

GraphQL query:

    {
      sortBy (field: "age", order: "DSC") {
        id,
        name,
        age,
        job
      }
    }

will output:

    {
      "data": {
        "sortBy": [
          {
            "id": 2,
            "name": "Jessie",
            "age": 30,
            "job": "teacher"
          },
          {
            "id": 3,
            "name": "Dan",
            "age": 30,
            "job": "teacher"
          },
          {
            "id": 0,
            "name": "Dan",
            "age": 22,
            "job": "student"
          },
          {
            "id": 1,
            "name": "Marie",
            "age": 20,
            "job": "student"
          },
          {
            "id": 5,
            "name": "Jessie",
            "age": 20,
            "job": "student"
          },
          {
            "id": 4,
            "name": "Marie",
            "age": 18,
            "job": "student"
          }
        ]
      }
    }

Default order is <code>ASC</code>.

### groupBy

###### sample2

GraphQL query:

    {
      groupBy (job: "teacher") {
        id,
        name,
        age,
        job
      }
    }

will output:

    {
      "data": {
        "groupBy": [
          {
            "id": 2,
            "name": "Jessie",
            "age": 30,
            "job": "teacher"
          },
          {
            "id": 3,
            "name": "Dan",
            "age": 30,
            "job": "teacher"
          }
        ]
      }
    }

###### sample3

GraphQL query:

    {
      groupBy (age: 20, job: "student") {
        id,
        name,
        age,
        job
      }
    }

will output:

    {
      "data": {
        "groupBy": [
          {
            "id": 1,
            "name": "Marie",
            "age": 20,
            "job": "student"
          },
          {
            "id": 5,
            "name": "Jessie",
            "age": 20,
            "job": "student"
          }
        ]
      }
    }

### findOne

###### sample4

GraphQL query:

    {
      findOne (id: 3) {
        id,
        name,
        age,
        job
      }
    }

will output:

    {
      "data": {
        "findOne": {
          "id": 3,
          "name": "Dan",
          "age": 30,
          "job": "teacher"
        }
      }
    }

### findAll

###### sample5

GraphQL query:

    {
      findAll {
        id,
        name,
        age,
        job
      }
    }

will output:

    {
      "data": {
        "findAll": [
          {
            "id": 0,
            "name": "Dan",
            "age": 22,
            "job": "student"
          },
          {
            "id": 1,
            "name": "Marie",
            "age": 20,
            "job": "student"
          },
          {
            "id": 2,
            "name": "Jessie",
            "age": 30,
            "job": "teacher"
          },
          {
            "id": 3,
            "name": "Dan",
            "age": 30,
            "job": "teacher"
          },
          {
            "id": 4,
            "name": "Marie",
            "age": 18,
            "job": "student"
          },
          {
            "id": 5,
            "name": "Jessie",
            "age": 20,
            "job": "student"
          }
        ]
      }
    }

### All queries in one

###### sample6

GraphQL query:

    {
      sortByAge: sortBy (field: "age", order: "DSC") {
        id,
        name,
        age,
        job
      }
      groupByTeacher: groupBy (job: "teacher") {
        id,
        name,
        age,
        job
      }
      groupByStudent: groupBy (age: 20, job: "student") {
        id,
        name,
        age,
        job
      }
      findOne (id: 3) {
        id,
        name,
        age,
        job
      }
      findAll {
        id,
        name,
        age,
        job
      }
    }

will output:

    {
      "data": {
        "sortByAge": [
          {
            "id": 2,
            "name": "Jessie",
            "age": 30,
            "job": "teacher"
          },
          {
            "id": 3,
            "name": "Dan",
            "age": 30,
            "job": "teacher"
          },
          {
            "id": 0,
            "name": "Dan",
            "age": 22,
            "job": "student"
          },
          {
            "id": 1,
            "name": "Marie",
            "age": 20,
            "job": "student"
          },
          {
            "id": 5,
            "name": "Jessie",
            "age": 20,
            "job": "student"
          },
          {
            "id": 4,
            "name": "Marie",
            "age": 18,
            "job": "student"
          }
        ],
        "groupByTeacher": [
          {
            "id": 2,
            "name": "Jessie",
            "age": 30,
            "job": "teacher"
          },
          {
            "id": 3,
            "name": "Dan",
            "age": 30,
            "job": "teacher"
          }
        ],
        "groupByStudent": [
          {
            "id": 1,
            "name": "Marie",
            "age": 20,
            "job": "student"
          },
          {
            "id": 5,
            "name": "Jessie",
            "age": 20,
            "job": "student"
          }
        ],
        "findOne": {
          "id": 3,
          "name": "Dan",
          "age": 30,
          "job": "teacher"
        },
        "findAll": [
          {
            "id": 0,
            "name": "Dan",
            "age": 22,
            "job": "student"
          },
          {
            "id": 1,
            "name": "Marie",
            "age": 20,
            "job": "student"
          },
          {
            "id": 2,
            "name": "Jessie",
            "age": 30,
            "job": "teacher"
          },
          {
            "id": 3,
            "name": "Dan",
            "age": 30,
            "job": "teacher"
          },
          {
            "id": 4,
            "name": "Marie",
            "age": 18,
            "job": "student"
          },
          {
            "id": 5,
            "name": "Jessie",
            "age": 20,
            "job": "student"
          }
        ]
      }
    }

# License

MIT
