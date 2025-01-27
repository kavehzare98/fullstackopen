sequenceDiagram:
    participant server
    participant browser

    after form submission

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: JSON Data [{"content": "hii", "date":...}]
    deactivate server
    
    Note right of browser: The browser executes the callbackk function that renders the notes.
