
const Parent =({children})=>{
return(
    <div>
        {children}
    </div>
)
}

// In main App folder
/*
const App =({children})=>{
return(
    <Parent>
        <Child/>
    </Parent>
)
}
In React, a dynamic child refers to a child component that is generated or created dynamically at runtime, rather than being explicitly defined in the parent component's render method.

Dynamic children are often used when the number of child components that need to be rendered is not known beforehand or changes based on user interaction or other factors. Instead of manually creating and updating the child components in the parent component's render method, the parent component can use state or props to dynamically generate the child components.

For example, suppose you have a parent component that needs to display a list of items. Instead of hard-coding the list of items as child components in the render method, you can use a loop or map function to dynamically generate the child components based on an array of data.
*/
