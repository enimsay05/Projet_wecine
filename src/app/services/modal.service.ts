import { ComponentFactoryResolver, Injectable, Inject, ViewContainerRef } from "@angular/core";
import { Movie } from "../entity/movie";
import { MovieModalComponent } from '../modal/movie_detail.component';

@Injectable({providedIn: 'root'})
export class ModalService {
    private rootViewContainer: ViewContainerRef;
    factoryResolver: ComponentFactoryResolver;
    constructor(@Inject(ComponentFactoryResolver) factoryResolver: ComponentFactoryResolver) {
        this.factoryResolver = factoryResolver;
    }
    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }
    addDynamicComponent(modalMovie:Movie) {
        const factory = this.factoryResolver.resolveComponentFactory(MovieModalComponent);
        const component = factory.create(this.rootViewContainer.parentInjector);
        component.instance.modalMovie = modalMovie;
        component.instance.closeModal.subscribe(() => this.removeDynamicComponent(component));
        this.rootViewContainer.insert(component.hostView);
    }

    removeDynamicComponent(component) {
        component.destroy();
    }
}
