export async function createMicrofrontendAppContainer(container) {
    const create = (await import("./createMicrofrontendAppContainer.jsx")).createMicrofrontendAppContainer
    return create(container)
}
