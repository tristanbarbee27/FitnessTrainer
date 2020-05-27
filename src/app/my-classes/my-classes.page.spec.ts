import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyClassesPage } from './my-classes.page';

describe('MyClassesPage', () => {
  let component: MyClassesPage;
  let fixture: ComponentFixture<MyClassesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClassesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyClassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
