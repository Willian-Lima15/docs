import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TabelaComponent } from "./tabela.component";

@NgModule({
    declarations:[TabelaComponent],
    exports:[TabelaComponent],
    imports:[CommonModule]
})

export class TabelaModule {
    
}