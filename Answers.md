1. What problem does the context API help solve?

It's intent is to solve the problem created by prop drilling. What's prop drilling you might say? Ask the google if you don't know.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

What is this crap? A ten part question wrapped up as one question. So unfair. The single source of truth idea is that all of the state for your entire application is kept/managed in one place. A store is an object that holds the app state tree. There should only be one (Higlander comes to mind, "There can only be one!") The only way to change state is use an action which is an object saying/describing what happened. Reducers are pure functions that take the previous state and an action and return new state objects.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the global state that all the components can access. Component state is a local state for a specific component. Only that component can see it. As your app grows/scales state becomes more difficult to manage. This is where a state becomes difficult to manage. This is when it may be better/easier to manage state globally. Passing state via props works great if it only needs to be passed one or two levels but byond that you may want to look at some form of state management (NOT REDUX).

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware for basic side effects in logic including async logic. It allows us to write action creators that return a function instead of an action, aka a thunk. It allows us to delay the execution of an action or only execute only if a certain condition is met.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like context API because it's so much simpler, especially with hooks. To me it seems like there is a lot of extra coding/boilerplate to set up redux. I just don't care for it personally.
