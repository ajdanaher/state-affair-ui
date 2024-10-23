This is UI component for state-affair site. Earlier i shared server component.
Follow these instructions -

- Checkout code on local.
- npm install
- Suggesting to start back end server first then start this UI app.
- start this app by npm start. this will start server on port 3000 and make sure we already have server installed on local machine and running. This UI app will connect to localhost:8080 which is server.
- As soon as app is launched, some cards would show on the page if present in the database. Let's go on /fetch-news route and enter some topic (e.g. Microsoft or Google or whatever of your choice) once you submit the form, data would be populated from remote API.

This App has three routes -
/create-news This is a form where we can create news with different attributes. Please note there is no validatiuon or checks present this time on the UI.

/ or /news this will list news articles from the database.. Please note this is just summary and idea is to create another route if user select that card and s/he would be taken to detail of the news. on the detail page we would show content description and everything what we have in DB. But that is not developed this moment and will be implemented soon.

/fetch-news This is another form where user would enter the topic and once submitted, message would be sent to the backend and it will fetch news for the topic..

Things are yet to be done for better User Experience and Completeness -

- There is no form validation present this moment.
- There is no Error messaging present this moment. Errors are logged on the browser as console.error
- Styling is not complete, also mobile and other form factors need to be addressed.
- Unit test and other tests need to be written. default app creation gives the wiring of test framework but tests need to be written.

Basically when i wrote this app, I wanted to show the flow where UI and backend can be connected with end-to-end. My goal was not to implement perfact solution as it would take some time.
