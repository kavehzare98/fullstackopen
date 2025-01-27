sequenceDiagram:
    participant browser
    participant server
    
    before form submission

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: JavaScript source file
    deactivate server

    Note right of browser: Browser starts executing JS file that fetches the JSON from the server.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser:[{"content": "d", "date": "2025-01-27T14:41:39.495Z"},...]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes.    
