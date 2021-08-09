import { NgModule } from '@angular/core'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms'

@NgModule({
    imports: [
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
        MatSelectModule,
        FormsModule,
    ],

    exports: [
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
        MatSelectModule,
        FormsModule,
    ],
})
export class MaterialModule {}
