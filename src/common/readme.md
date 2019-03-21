#Common
The common folder houses all our platform agnostic code. The only "component" type files that should
exist in here are form HOC's that process and validate data but have no UI / Presentational code.

The majority of this code is related to managing the Redux store data. 
This includes API calls, dispatching actions, saving data to Redux store and pulling 
raw and derived data (via selectors) for use in components.

## Directory structure, libraries and terminology
**Action Types** is a term used to define the event constants used in the action creators and reducers

**Actions** are a part of the Redux lifecycle. Actions dispatch events and data objects that Reducers consume.

**Reducers** are a part of the Redux lifecycle. Reducers consume events from Actions and update the Redux state 
based on the action type and the payload. 

There are many great tutorials online but here is a good short but good description 
of how our app is setup: [Redux Tutorial](https://www.youtube.com/watch?v=1w-oQ-i1XB8)

**Context** Context provides a way to pass data through the component tree without having to pass props down 
manually at every level. This is a great middle ground between Redux and passing data.

**Entities** code relates to converting JSON data into normalized objects as per [Normalizr](https://github.com/paularmstrong/normalizr).
We also use [AJV](https://github.com/epoberezkin/ajv) to validate and set param types from the JSON response.

**Immutability Helper** Lets us mutate a COPY of our Redux state (and other things) without changing the original source.
[Immutability Helper](https://github.com/kolodny/immutability-helper)

**Middleware** is used to intercept data in transit and perform additional operations with or on it. 
For example, when the polling chat action is fired and it receives a response from the API server the
middleware will send a new notification before the data is passed to the reducer.

**Selectors** can compute derived data, allowing Redux to store the minimal possible state.
[Reselect](https://github.com/reactjs/reselect)
[Reselect video](https://www.youtube.com/watch?v=6Xwo5mVxDqI)

**Services** are custom services that are run on the system. Things like error handling and the polling services.

**Test Data** holds all our data specific to unit testing

**Validators** are where we keep any validation rules for form data
