import { ExampleComponent } from "@michaelsindlinger/microfrontend-demo-app"
import React from "react"
import ReactDOM from "react-dom"

export async function createMicrofrontendAppContainer(container) {
    return {
        mount(props) {
            ReactDOM.render(<ExampleComponent {...props} />, container)
        },
        unmount() {
            ReactDOM.unmountComponentAtNode(container)
        }
    }
}
