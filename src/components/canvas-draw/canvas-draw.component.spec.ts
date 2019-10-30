import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CanvasDraw } from '../canvas-draw/canvas-draw';

//all testings
describe('CanvasDrawComponent (with beforeEach)', () => { 
  let fixture;
  let component;
  let canvasDraw: CanvasDraw;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasDraw],
      imports: [
        IonicModule.forRoot(CanvasDraw)
      ],
      providers: [
        StatusBar,
        SplashScreen,
      ]
    })
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasDraw);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });
  it ('should be created instance', () => {
    expect(component instanceof CanvasDraw).toBe(true);
  });

  it('can instantiate the component', () => {
    expect(component).not.toBeNull();
  });

  it('should generate the click event btn switchColor', () => {
    const btnSwtichColor  = fixture.debugElement.nativeElement.querySelector('#btn_isColor');
    btnSwtichColor.click();
    expect(btnSwtichColor).toBeTruthy();
  });

  it('should be created button clear', ()=>{
    const btnClear: HTMLElement = fixture.debugElement.nativeElement.querySelector('#btnClear');
    btnClear.click();
    expect(btnClear).toBeTruthy();
  });

  it('should be created the click event button undo', ()=>{
    const btnUndo: HTMLElement = fixture.debugElement.nativeElement.querySelector('#btnUndo');
    btnUndo.click();
    expect(btnUndo).toBeTruthy();
  });
  
  it('should be created the click event button redo', ()=>{
    const btnRedo: HTMLElement = fixture.debugElement.nativeElement.querySelector('#btnRedo');
    btnRedo.click();
    expect(btnRedo).toBeTruthy();
  });

  it('should generate the click event btn line width', () => {
    const btnLineWidth  = fixture.debugElement.nativeElement.querySelector('#btnLineWidth');
    btnLineWidth.click();
    expect(btnLineWidth).toBeTruthy();
  });


  
});




