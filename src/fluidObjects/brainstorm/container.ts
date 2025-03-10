import {
    ContainerRuntimeFactoryWithDefaultDataStore,
} from "@fluidframework/aqueduct";

import { NoteroInstantiationFactory } from "./fluid-object";

/**
 * This does setup for the Container. The SimpleModuleInstantiationFactory also enables dynamic loading in the
 * EmbeddedComponentLoader.
 *
 * There are two important things here:
 * 1. Default Component name
 * 2. Map of string to factory for all components
 *
 * In this example, we are only registering a single component, but more complex examples will register multiple
 * components.
 */
export const NoteroContainerFactory = new ContainerRuntimeFactoryWithDefaultDataStore(
    NoteroInstantiationFactory.type,
    new Map([
        NoteroInstantiationFactory.registryEntry,
    ]),
);
