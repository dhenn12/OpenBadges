define({ "api": [
  {
    "type": "put",
    "url": "/api/v1/admin/badge/:badgeId",
    "title": "Update Badge",
    "name": "AdminPutBadge",
    "description": "<p>Change information of a Badge (global | local).</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>title of Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>a brief summary of the Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "critera",
            "description": "<p>criterias getting this Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "exists",
            "description": "<p>if false, badge is deactivated</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badge updated successfully.</code> or <code>Badge not changed.</code> or <code>Badge not found.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "badge",
            "description": "<p><code>{&quot;name&quot;:&quot;name&quot;, &quot;issuer&quot;: user, &quot;description&quot;: &quot;description&quot;, &quot;criteria&quot;:&quot;criteria&quot;, &quot;global&quot;: true, &quot;exists&quot;: true}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/badge.js",
    "groupTitle": "Admin"
  },
  {
    "type": "put",
    "url": "/api/v1/admin/badge/:badgeId/course/:courseId/assigne/user/:userId",
    "title": "Assigne a Badge",
    "name": "adminAssigneLocalBadge",
    "description": "<p>Assigne a Badge to an user.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courseId",
            "description": "<p>the ID of the course you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Local Badge is assigned successfully to user.</code> or <code>GLobal Badge is assigned successfully to user.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Local Badge is already assigned to user.&quot;}</code> or <code>{&quot;message&quot;: &quot;Global Badge is already assigned to user.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/badge.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/badge",
    "title": "Get Badges",
    "name": "adminFindBadge",
    "description": "<p>Get (all) Badges by different query.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>find Badges by its name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>find Badges by its description</p>"
          },
          {
            "group": "Parameter",
            "type": "ObejctId",
            "optional": true,
            "field": "issuer",
            "description": "<p>the ID of the issuer you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObejctId",
            "optional": true,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObejctId",
            "optional": true,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "global",
            "description": "<p>if true, get global Badges; if false, get local Badges</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badges found successfully.</code> or <code>Badges not found using the specified parameters.</code> or <code>Badges not found.</code></p>"
          }
        ],
        "Created 201": [
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "badges",
            "description": "<p><code>[{&quot;name&quot;:&quot;name&quot;, &quot;issuer&quot;: user, &quot;description&quot;: &quot;description&quot;, &quot;criteria&quot;:&quot;criteria&quot;, &quot;global&quot;: true, &quot;exists&quot;: true}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/badge.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/v1/course/:courseId/participants",
    "title": "Participants of one course",
    "name": "adminGetParticipants",
    "description": "<p>Getting all participants of one course by ID</p>",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courseId",
            "description": "<p>the ID of the course you are referring to</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Participants found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "participants",
            "description": "<p><code>[{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Course not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/course.js",
    "groupTitle": "Admin"
  },
  {
    "type": "put",
    "url": "/api/v1/admin/badge/:badgeId/course/:courseId/unassigne/user/:userId",
    "title": "Unassigne a Badge",
    "name": "adminUnassigneLocalBadge",
    "description": "<p>Unassigne a Badge to an user.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courseId",
            "description": "<p>the ID of the course you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Local Badge is unassigned successfully to user.</code> or <code>Global Badge is unassigned successfully to user.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Local Badge is already unassigned to user.&quot;}</code> or <code>{&quot;message&quot;: &quot;Global Badge is already unassigned to user.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/badge.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/badge",
    "title": "Create global Badge",
    "name": "createGlobalBadge",
    "description": "<p>Create a new global Badge.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>title of Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>a brief summary of the Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "critera",
            "description": "<p>criterias getting this Badge</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Global Badge is succesfully created.</code></p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "badge",
            "description": "<p>`{&quot;name&quot;:&quot;name&quot;, &quot;issuer&quot;: user, &quot;description&quot;: &quot;description&quot;, &quot;criteria&quot;:&quot;criteria&quot;, &quot;global&quot;: true, &quot;exists&quot;: true}'</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/badge.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/user",
    "title": "Get all users",
    "name": "getAllUser",
    "description": "<p>Get details about all registered users.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>All users found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "users",
            "description": "<p><code>[{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/user.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/user/:userId",
    "title": "Get one user",
    "name": "getOneUser",
    "description": "<p>Get details about one user.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p><code>{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/user.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/signin",
    "title": "Sign in",
    "name": "signInAdmin",
    "description": "<p>Sign in the admin.</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the username of the admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the password of the admin</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Admin successfully signed in.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>valid JSON Web Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>valid refresh token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;Username or password is wrong.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database or creating a JWT.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/login.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/signup",
    "title": "Sign up",
    "name": "signUpAdmin",
    "description": "<p>Sign up a new OpenBadges-Admin. (Only a logged in Admin can create a new Admin account.)</p>",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>full first name of the admin; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>full last name of the admin; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>the admin's place of residence; must consist of at least 2 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "postalcode",
            "description": "<p>the postal code of the admin's place of residence; minimum 01067, maximal 99998</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>the birthday of the admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email for the admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the username for the admin; it is used for signing in</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the desired password for the admin; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>confirm the desired password for the admin; must consist the same string as password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Admin is successfully registered.</code></p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p><code>{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:[&quot;admin&quot;]}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Passed parameters are not valid.</p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "409",
            "description": "<p><code>{&quot;message&quot;: &quot;Email already exists.&quot;}</code> or <code>{&quot;error&quot;: &quot;Username already exists.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/admin/login.js",
    "groupTitle": "Admin"
  },
  {
    "type": "put",
    "url": "/api/v1/badge/:badgeId/course/:courseId/assigne/user/:userId",
    "title": "Assigne a Badge",
    "name": "assigneLocalBadge",
    "description": "<p>Assigne a Badge to a specified user.</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courseId",
            "description": "<p>the ID of the Course you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Local Badge is assigned successfully to user.</code> or <code>GLobal Badge is assigned successfully to user.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Local Badge is already assigned to user.&quot;}</code> or <code>{&quot;message&quot;: &quot;Global Badge is already assigned to user.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission assigning the Badge to an user.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/user.js",
    "groupTitle": "Badge"
  },
  {
    "type": "post",
    "url": "/api/v1/badge",
    "title": "Create local Badge",
    "name": "createLocalBadge",
    "description": "<p>Create a new local Badge.</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>title of Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>a brief summary of the Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "critera",
            "description": "<p>criterias getting this Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "Base64-String",
            "optional": true,
            "field": "image",
            "description": "<p>Base64-String of an image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contentType",
            "description": "<p>contentType (mimeType) of an image<br>Example: <code>image/jpg</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Local Badge is succesfully created.</code></p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "badge",
            "description": "<p><code>{&quot;name&quot;:&quot;name&quot;, &quot;issuer&quot;: user, &quot;description&quot;: &quot;description&quot;, &quot;criteria&quot;:&quot;criteria&quot;, &quot;global&quot;: false, &quot;exists&quot;: true, &quot;image&quot;: &lt;Buffer&gt;, &quot;contentType&quot;: &quot;image/png&quot;}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p>`{&quot;message&quot;: &quot;To store an image, 'image' and 'contentType' are required.&quot;}</p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "get",
    "url": "/api/v1/badge/:badgeId",
    "title": "Get Badge",
    "name": "getBadge",
    "description": "<p>Get one Badge by its ObjectId.</p>",
    "group": "Badge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObejctId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badge found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "badge",
            "description": "<p><code>{&quot;name&quot;:&quot;name&quot;, &quot;issuer&quot;: user, &quot;description&quot;: &quot;description&quot;, &quot;criteria&quot;:&quot;criteria&quot;, &quot;global&quot;: true, &quot;exists&quot;: true}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "get",
    "url": "/api/v1/badge",
    "title": "Get Badges",
    "name": "getBadges",
    "description": "<p>Get (all) Badges by different query which exist.</p>",
    "group": "Badge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>find Badges by its name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>find Badges by its description</p>"
          },
          {
            "group": "Parameter",
            "type": "ObejctId",
            "optional": true,
            "field": "issuer",
            "description": "<p>the ID of the issuer you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "global",
            "description": "<p>if true, get global Badges; if false, get local Badges</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badges found successfully.</code> or <code>Badges not found using the specified parameters.</code> or <code>Badges not found.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "badges",
            "description": "<p><code>[{&quot;name&quot;:&quot;name&quot;, &quot;issuer&quot;: user, &quot;description&quot;: &quot;description&quot;, &quot;criteria&quot;:&quot;criteria&quot;, &quot;global&quot;: true, &quot;exists&quot;: true}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "get",
    "url": "/api/v1/badge/me",
    "title": "Get my Badges",
    "name": "getBadgesMe",
    "description": "<p>Get (all) Badges of currently signed in User by different queries.</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>find Badges by its name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>find Badges by its description</p>"
          },
          {
            "group": "Parameter",
            "type": "ObejctId",
            "optional": true,
            "field": "issuer",
            "description": "<p>find Badges by its issuer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "global",
            "description": "<p>if true, get global Badges; if false, get local Badges</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Badges found successfully.</code> or <code>Badges not found using the specified parameters.</code> or <code>Badges not found.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "badges",
            "description": "<p><code>[{&quot;name&quot;:&quot;name&quot;, &quot;issuer&quot;: user, &quot;description&quot;: &quot;description&quot;, &quot;criteria&quot;:&quot;criteria&quot;, &quot;global&quot;: true, &quot;exists&quot;: true}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "put",
    "url": "/api/v1/badge/:badgeId",
    "title": "Change local Badge",
    "name": "putLocalBadge",
    "description": "<p>Change information of a local Badge.</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>title of Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>a brief summary of the Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "critera",
            "description": "<p>criterias getting this Badge</p>"
          },
          {
            "group": "Parameter",
            "type": "Base64-String",
            "optional": true,
            "field": "image",
            "description": "<p>Base64-String of an image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contentType",
            "description": "<p>contentType (mimeType) of an image<br>Example: <code>image/jpg</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Local Badge updated successfully.</code> or <code>Local Badge not changed.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "badge",
            "description": "<p><code>{&quot;name&quot;:&quot;name&quot;, &quot;issuer&quot;: user, &quot;description&quot;: &quot;description&quot;, &quot;criteria&quot;:&quot;criteria&quot;, &quot;global&quot;: false, &quot;exists&quot;: true, &quot;image&quot;: &lt;Buffer&gt;, &quot;contentType&quot;: &quot;image/png&quot;}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission putting the local Badge.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;To update an image, \\'image\\' and \\'contentType\\' are required.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "put",
    "url": "/api/v1/badge/:badgeId/deactivation",
    "title": "Deactivate local Badge",
    "name": "putLocalBadgeHidden",
    "description": "<p>Deactivate a local Badge.</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Local Badge is successfully deactivated.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Local Badge not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission deactivating the local Badge.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "409",
            "description": "<p><code>{&quot;message&quot;: &quot;Local Badge is already deactivated.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/badge.js",
    "groupTitle": "Badge"
  },
  {
    "type": "put",
    "url": "/api/v1/badge/:badgeId/course/:courseId/unassigne/user/:userId",
    "title": "Unassigne a Badge",
    "name": "unassigneLocalBadge",
    "description": "<p>Unassigne a Badge to a specified user.</p>",
    "group": "Badge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "badgeId",
            "description": "<p>the ID of the Badge you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courseId",
            "description": "<p>the ID of the Course you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the ID of the user you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Local Badge is unassigned successfully to user.</code> or <code>Global Badge is unassigned successfully to user.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Local Badge is already unassigned to user.&quot;}</code> or <code>{&quot;message&quot;: &quot;Global Badge is already unassigned to user.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission unassigning the Badge to an user.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Badge not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/badge/user.js",
    "groupTitle": "Badge"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_LucNi_OneDrive_Documents_Studium_Semester_5_OpenBadges_OpenBadges_api_doc_main_js",
    "groupTitle": "C__Users_LucNi_OneDrive_Documents_Studium_Semester_5_OpenBadges_OpenBadges_api_doc_main_js",
    "name": ""
  },
  {
    "type": "put",
    "url": "/api/v1/course/:courseId/user/registration",
    "title": "Register me",
    "name": "courseSignIn",
    "description": "<p>Register currently logged in user in a course, if the size is not reached.</p>",
    "group": "Course",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courseId",
            "description": "<p>the ID of the course you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User registered successfully in course.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Course not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Course size is already reached.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/course/user.js",
    "groupTitle": "Course"
  },
  {
    "type": "put",
    "url": "/api/v1/course/:courseId/user/deregistration",
    "title": "Deregister me",
    "name": "courseSignOut",
    "description": "<p>Deregister a user in a course, if the user was registered.</p>",
    "group": "Course",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courseId",
            "description": "<p>the ID of the course you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User deregistered successfully from course.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Course not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;User is not registered in course.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/course/user.js",
    "groupTitle": "Course"
  },
  {
    "type": "post",
    "url": "/api/v1/course",
    "title": "Create course",
    "name": "createCourse",
    "description": "<p>Create a new Course.</p>",
    "group": "Course",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId-Array",
            "optional": false,
            "field": "badge",
            "description": "<p>the ObjectId of global badges for the course (min: 1); example: <code>[&quot;5e1b0bafeafe4a84c4ac31a9&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId-Array",
            "optional": false,
            "field": "localbadge",
            "description": "<p>the ObjectId of local badges for the Course (min: 1); example: <code>[&quot;5e1b0bafeafe4a84c4ac31a9&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseprovider",
            "description": "<p>the provider of the course might be specified by the creator</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postalcode",
            "description": "<p>postalcode of the building where the course take place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>adress of the location from the Course</p>"
          },
          {
            "group": "Parameter",
            "type": "Coordinates-Array",
            "optional": false,
            "field": "coordinates",
            "description": "<p>coordinates of the location from the Course; example: <code>[longitude, latitude]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "topic",
            "description": "<p>topic of the Course</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>a brief summary about the course contents</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requirements",
            "description": "<p>a brief summary about the course requirements</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startdate",
            "description": "<p>Date of the start of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "enddate",
            "description": "<p>Date of the end of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>maximal amount of the course participants</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Course is successfully created.</code></p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p>`{&quot;name&quot;:&quot;name&quot;, &quot;badge&quot;= [<badgeId>, <badgeId>], &quot;localbadge&quot;= [<badgeId>, <badgeId>], &quot;creator&quot;: <userId>, &quot;courseprovider&quot;: <String>, &quot;postalcode&quot;: <Number>, &quot;address&quot;: <String>, &quot;coordinates&quot;: [Number, Number], &quot;topic&quot;: <String>, &quot;description&quot;: <String>, &quot;requirements&quot;: <String>, &quot;startdate&quot;: <Date>, &quot;enddate&quot;: <Date>, &quot;participants&quot;: [<UserId>, <UserId>], &quot;size&quot;: <Number>}'</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/course/course.js",
    "groupTitle": "Course"
  },
  {
    "type": "get",
    "url": "/api/v1/course/:courseId",
    "title": "Get course",
    "name": "getCourse",
    "description": "<p>Get one course by course-id.</p>",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courseId",
            "description": "<p>the ID of the course you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Course found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p><code>{&quot;name&quot;:&quot;name&quot;, &quot;badge&quot;= [&lt;badgeId&gt;, &lt;badgeId&gt;], &quot;localbadge&quot;= [&lt;badgeId&gt;, &lt;badgeId&gt;], &quot;creator&quot;: &lt;userId&gt;, &quot;courseprovider&quot;: &lt;String&gt;, &quot;postalcode&quot;: &lt;Number&gt;, &quot;address&quot;: &lt;String&gt;, &quot;coordinates&quot;: [Number, Number], &quot;topic&quot;: &lt;String&gt;, &quot;description&quot;: &lt;String&gt;, &quot;requirements&quot;: &lt;String&gt;, &quot;startdate&quot;: &lt;Date&gt;, &quot;enddate&quot;: &lt;Date&gt;, &quot;participants&quot;: [&lt;UserId&gt;, &lt;UserId&gt;], &quot;size&quot;: &lt;Number&gt;}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Course not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/course/course.js",
    "groupTitle": "Course"
  },
  {
    "type": "get",
    "url": "/api/v1/course",
    "title": "Get courses",
    "name": "getCourses",
    "description": "<p>Get all courses respectivly get courses by different parameters which exist.</p>",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>course name</p>"
          },
          {
            "group": "Parameter",
            "type": "Coordinates-Array",
            "optional": true,
            "field": "coordinates",
            "description": "<p>coordinates in which radius might be an course; example: <code>[longitude, latitude]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "radius",
            "description": "<p>radius [in km] about a pair of coordinates</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "startdate",
            "description": "<p>greater (or equal) than the startdate of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "enddate",
            "description": "<p>lower (or equal) than the enddate of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "topic",
            "description": "<p>course topic</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Courses found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "courses",
            "description": "<p><code>[{&quot;name&quot;:&quot;name&quot;, &quot;badge&quot;= [&lt;badgeId&gt;, &lt;badgeId&gt;], &quot;localbadge&quot;= [&lt;badgeId&gt;, &lt;badgeId&gt;], &quot;creator&quot;: &lt;userId&gt;, &quot;courseprovider&quot;: &lt;String&gt;, &quot;postalcode&quot;: &lt;Number&gt;, &quot;address&quot;: &lt;String&gt;, &quot;coordinates&quot;: [Number, Number], &quot;topic&quot;: &lt;String&gt;, &quot;description&quot;: &lt;String&gt;, &quot;requirements&quot;: &lt;String&gt;, &quot;startdate&quot;: &lt;Date&gt;, &quot;enddate&quot;: &lt;Date&gt;, &quot;participants&quot;: [&lt;UserId&gt;, &lt;UserId&gt;], &quot;size&quot;: &lt;Number&gt;}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;Courses not found using the specified parameters.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/course/course.js",
    "groupTitle": "Course"
  },
  {
    "type": "get",
    "url": "/api/v1/course/:courseId/participants",
    "title": "Get participants of one course",
    "name": "getParticipants",
    "description": "<p>Getting all participants of one course by ID.</p>",
    "group": "Course",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courseId",
            "description": "<p>the ID of the course you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Participants found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "participants",
            "description": "<p>`[{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false}]'</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Course not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission getting the participants of the course.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/course/course.js",
    "groupTitle": "Course"
  },
  {
    "type": "get",
    "url": "/api/v1/course/me",
    "title": "Get my courses",
    "name": "getmyCourses",
    "description": "<p>Get (all) courses of currently signed in User by different queries.</p>",
    "group": "Course",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>course name</p>"
          },
          {
            "group": "Parameter",
            "type": "Coordinates-Array",
            "optional": true,
            "field": "coordinates",
            "description": "<p>coordinates in which radius might be an course; example: <code>[longitude, latitude]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "radius",
            "description": "<p>radius [in km] about a pair of coordinates</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "startdate",
            "description": "<p>greater (or equal) than the startdate of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "enddate",
            "description": "<p>lower (or equal) than the enddate of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "topic",
            "description": "<p>course topic</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Courses found successfully.</code> or <code>No courses found using the specified parameters.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "courses",
            "description": "<p><code>[{&quot;name&quot;:&quot;name&quot;, &quot;badge&quot;= [&lt;badgeId&gt;, &lt;badgeId&gt;], &quot;localbadge&quot;= [&lt;badgeId&gt;, &lt;badgeId&gt;], &quot;creator&quot;: &lt;userId&gt;, &quot;courseprovider&quot;: &lt;String&gt;, &quot;postalcode&quot;: &lt;Number&gt;, &quot;address&quot;: &lt;String&gt;, &quot;coordinates&quot;: [Number, Number], &quot;topic&quot;: &lt;String&gt;, &quot;description&quot;: &lt;String&gt;, &quot;requirements&quot;: &lt;String&gt;, &quot;startdate&quot;: &lt;Date&gt;, &quot;enddate&quot;: &lt;Date&gt;, &quot;participants&quot;: [&lt;UserId&gt;, &lt;UserId&gt;], &quot;size&quot;: &lt;Number&gt;}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;To filter courses in a certain radius, the parameters &quot;coordinates&quot; and &quot;radius&quot; are required.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/course/course.js",
    "groupTitle": "Course"
  },
  {
    "type": "get",
    "url": "/api/v1/course/creator/me/",
    "title": "Get my created courses",
    "name": "getmyCreatedCourses",
    "description": "<p>Get (all) created courses of currently signed in User by different queries.</p>",
    "group": "Course",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>course name</p>"
          },
          {
            "group": "Parameter",
            "type": "Coordinates-Array",
            "optional": true,
            "field": "coordinates",
            "description": "<p>coordinates in which radius might be an course; example: <code>[longitude, latitude]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "radius",
            "description": "<p>radius [in km] about a pair of coordinates</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "startdate",
            "description": "<p>greater (or equal) than the startdate of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "enddate",
            "description": "<p>lower (or equal) than the enddate of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "topic",
            "description": "<p>course topic</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Courses found successfully.</code> or <code>No courses found using the specified parameters.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "courses",
            "description": "<p><code>[{&quot;name&quot;:&quot;name&quot;, &quot;badge&quot;= [&lt;badgeId&gt;, &lt;badgeId&gt;], &quot;localbadge&quot;= [&lt;badgeId&gt;, &lt;badgeId&gt;], &quot;creator&quot;: &lt;userId&gt;, &quot;courseprovider&quot;: &lt;String&gt;, &quot;postalcode&quot;: &lt;Number&gt;, &quot;address&quot;: &lt;String&gt;, &quot;coordinates&quot;: [Number, Number], &quot;topic&quot;: &lt;String&gt;, &quot;description&quot;: &lt;String&gt;, &quot;requirements&quot;: &lt;String&gt;, &quot;startdate&quot;: &lt;Date&gt;, &quot;enddate&quot;: &lt;Date&gt;, &quot;participants&quot;: [&lt;UserId&gt;, &lt;UserId&gt;], &quot;size&quot;: &lt;Number&gt;}]</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;To filter courses in a certain radius, the parameters &quot;coordinates&quot; and &quot;radius&quot; are required.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/course/course.js",
    "groupTitle": "Course"
  },
  {
    "type": "put",
    "url": "/api/v1/course/:courseId",
    "title": "Change course",
    "name": "putCourse",
    "description": "<p>Change information of a course.</p>",
    "group": "Course",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courseId",
            "description": "<p>the ID of the course you are referring to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId-Array",
            "optional": true,
            "field": "badge",
            "description": "<p>the ObjectId of global badges for the course (min: 1); example: <code>[&quot;5e1b0bafeafe4a84c4ac31a9&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId-Array",
            "optional": true,
            "field": "localbadge",
            "description": "<p>the ObjectId of local badges for the course (min: 1); example: <code>[&quot;5e1b0bafeafe4a84c4ac31a9&quot;]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "courseprovider",
            "description": "<p>the provider of the course might be specified by the creator</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "postalcode",
            "description": "<p>postalcode of the building where the course take place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>adress of the location from the Course</p>"
          },
          {
            "group": "Parameter",
            "type": "Coordinates-Array",
            "optional": true,
            "field": "coordinates",
            "description": "<p>coordinates of the location from the Course; example: <code>[longitude, latitude]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "topic",
            "description": "<p>topic of the Course</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>a biref summary about the course contents</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "requirements",
            "description": "<p>a brief summary about the course requirements</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "startdate",
            "description": "<p>Date of the start of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "enddate",
            "description": "<p>Date of the end of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "size",
            "description": "<p>maximal amount of the course participants; must be greater (equal) than the current signed participants</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Course is updated successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p><code>{&quot;name&quot;:&quot;name&quot;, &quot;badge&quot;= [&lt;badgeId&gt;, &lt;badgeId&gt;], &quot;localbadge&quot;= [&lt;badgeId&gt;, &lt;badgeId&gt;], &quot;creator&quot;: &lt;userId&gt;, &quot;courseprovider&quot;: &lt;String&gt;, &quot;postalcode&quot;: &lt;Number&gt;, &quot;address&quot;: &lt;String&gt;, &quot;coordinates&quot;: [Number, Number], &quot;topic&quot;: &lt;String&gt;, &quot;description&quot;: &lt;String&gt;, &quot;requirements&quot;: &lt;String&gt;, &quot;startdate&quot;: &lt;Date&gt;, &quot;enddate&quot;: &lt;Date&gt;, &quot;participants&quot;: [&lt;UserId&gt;, &lt;UserId&gt;], &quot;size&quot;: &lt;Number&gt;}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Course not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission putting the course.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/course/course.js",
    "groupTitle": "Course"
  },
  {
    "type": "put",
    "url": "/api/v1/course/:courseId/deactivation",
    "title": "Deactivate course",
    "name": "putCourseHidden",
    "description": "<p>Deactivate a courseed. The course might be no longer in offer.</p>",
    "group": "Course",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "courseId",
            "description": "<p>the ID of the course you are referring to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Course is successfully deactivated.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: &quot;Course not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;No permission deactivating the course.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "409",
            "description": "<p><code>{&quot;message&quot;: &quot;Course is already deactivated.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/course/course.js",
    "groupTitle": "Course"
  },
  {
    "type": "post",
    "url": "/user/contact",
    "title": "Contact support",
    "name": "Contact",
    "description": "<p>Send an email to the support of the deposited API-Email.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>the subject of the email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>the content of the email (plaintext)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Emails are successfully sent.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during sending the email.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/contact.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/email/:emailToken",
    "title": "Confirm Email",
    "name": "confirmEmail",
    "description": "<p>Confirm an email of an user.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailToken",
            "description": "<p>Email-Token, to confirm the email-address</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 200": [
          {
            "group": "Created 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Email is successfully confirmed.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p><code>{&quot;message&quot;: Email-Token is not valid.}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/login.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/v1/user/me",
    "title": "Delete me",
    "name": "deleteMe",
    "description": "<p>Delete the user-account and every dependent course  of currently logged in user (exists to false).</p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User deleted successfully.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/v1/user/me",
    "title": "Get details",
    "name": "getMe",
    "description": "<p>Get details about currently logged in user.</p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User found successfully.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p><code>{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/v1/user/me",
    "title": "Change information",
    "name": "putMe",
    "description": "<p>Update the information about currently logged in user.</p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastname",
            "description": "<p>Name the new full last name of the user; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "city",
            "description": "<p>the user's new place of residence; must consist of at least 2 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "postalcode",
            "description": "<p>the new postal code of the user's place of residence; minimum 01067, maximal 99998</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>the new email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Base64-String",
            "optional": true,
            "field": "image",
            "description": "<p>Base64-String of an image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contentType",
            "description": "<p>contentType (mimeType) of an image<br>Example: <code>image/jpg</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User information updated successfully.</code> or <code>User information not changed.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p><code>{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:&quot;earner&quot;, &quot;emailIsConfirmed&quot;: false, &quot;image&quot;: &lt;Buffer&gt;, &quot;contentType&quot;: &quot;image/png&quot;}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/token/refresh",
    "title": "Refresh token",
    "name": "refreshToken",
    "description": "<p>Refresh the authorization, if the refresh token is valid.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>the refresh token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Authorization successfully refreshed</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>valid JSON Web Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>valid refresh token</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p><code>{&quot;id&quot;: 5e1b0bafeafe4a84c4ac31a9, &quot;role&quot;: &quot;earner&quot;}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;Refresh token is invalid or too old. Please sign in with your user credentials.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database or creating a JWT.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/authorization.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/refreshToken",
    "title": "Refresh token",
    "name": "refreshToken",
    "description": "<p>Refresh the authorization, if the refresh token is valid.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>the refresh token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Authorization successfully refreshed.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>valid JSON Web Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>valid refresh token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;Refresh token is invalid or too old. Please sign in with your user credentials.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database or creating a JWT.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/login.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/password/request",
    "title": "Request reset password",
    "name": "requestResetPassword",
    "description": "<p>Requests a password reset (in case of forgotten password). A link to reset the password will then be sent in an email, which is valid for 12 hours.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the username of the user; it is used for sending the email with all instructions</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Reset instructions successfully sent to user.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p><code>{&quot;message&quot;: &quot;User not found.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during sending the email with all instructions to reset the password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/login.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/password/reset",
    "title": "Reset password",
    "name": "resetPassword",
    "description": "<p>Reset the password with the resetPasswordToken.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resetPasswordToken",
            "description": "<p>token to reset password sent through email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the new desired password for the user; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>confirm the new desired password for the user; must consist the same string as password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Password successfully reset.</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;Request password reset expired.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/login.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/signin",
    "title": "Sign in",
    "name": "signIn",
    "description": "<p>Sign in the user.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User successfully signed in</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>valid JSON Web Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>valid refresh token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;Username or password is wrong&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database or creating a JWT.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/login.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/signout",
    "title": "Sign out",
    "name": "signOut",
    "group": "User",
    "description": "<p>Signs the user out, if JSON Web Token is valid. Invalidates the current JSON Web Token.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>allows to send a valid JSON Web Token along with this request with <code>Bearer</code> prefix.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example",
          "content": "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>Signed out successfully</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p><code>{&quot;message&quot;: &quot;JSON Web Token is invalid. Please sign in with your user credentials.&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Obejct",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during querying the database or creating the JWT.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/login.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/user/signup",
    "title": "Sign up",
    "name": "signUp",
    "description": "<p>Sign up a new OpenBadges-User.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>first name of the user; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>last name of the user; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>the user's place of residence; must consist of at least 2 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "postalcode",
            "description": "<p>the postal code of the user's place of residence; minimum 01067, maximal 99998</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>the birthday of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email for the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the username for the user; it is used for signing in</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the desired password for the user; must consist of at least 6 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>confirm the desired password for the user; must consist the same string as password</p>"
          },
          {
            "group": "Parameter",
            "type": "Base64-String",
            "optional": true,
            "field": "image",
            "description": "<p>Base64-String of an image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contentType",
            "description": "<p>contentType (mimeType) of an image<br>Example: <code>image/jpg</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>User is successfully registered.</code></p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p><code>{&quot;firstname&quot;:&quot;full firstname&quot;, &quot;lastname&quot;:&quot;full lastname&quot;, &quot;city&quot;:&quot;cityname&quot;, &quot;postalcode&quot;:&quot;123456&quot;, &quot;birthday&quot;:&quot;ISODate(&quot;1970-12-01T00:00:00Z&quot;)&quot;, &quot;email&quot;:&quot;test@test.de&quot;, &quot;username&quot;:&quot;nickname&quot;, &quot;role&quot;:[&quot;earner&quot;], &quot;image&quot;: &lt;Buffer&gt;, &quot;contentType&quot;: &quot;image/png&quot;}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "On error": [
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p>`{&quot;message&quot;: &quot;To store an image, 'image' and 'contentType' are required.&quot;}</p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "409",
            "description": "<p><code>{&quot;message&quot;: &quot;Email already exists&quot;}</code></p>"
          },
          {
            "group": "On error",
            "type": "Object",
            "optional": false,
            "field": "500",
            "description": "<p>Complications during storage</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/v1/user/login.js",
    "groupTitle": "User"
  }
] });
