import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { CanvasDraw } from '../components/canvas-draw/canvas-draw';

//all testings
describe('MyApp Component', () => { 
  let fixture;
  let component;
  let app: MyApp;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp)
      ],
      providers: [
        StatusBar,
        SplashScreen,
        CanvasDraw
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it ('should create the app', () => {
    expect(component instanceof MyApp).toBe(true);
  });

  it('can instantiate the component', () => {
    expect(component).not.toBeNull();
  });
  
});

