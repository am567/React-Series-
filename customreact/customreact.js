// here we are creating an element

function customRender(reactElement, container) {
    /*  const domElement = document.createElement(reactElement, type)
     domElement.innerHTML = reactElement.children
     domElement.setAttribute('href', reactElement.props.href)
     domElement.setAttribute('target', reactElement.props.target)
     container.appendchild(domElement) */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.append(domElement)

    // here we have optimise the code from the above one     

}


const reactElement = {
    type: 'a',               // what type of 
    props: {             // what properties it should have the element

        href: "https://google.com",
        target: '_blank'

    },
    children: 'click me to visit google'

}

// now we have to inject this in DOM. so we need reference of root using

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)    // what do you want to inject and where to do so




// now i want to run this reactElement using the vitebundler 
