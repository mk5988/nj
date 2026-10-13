import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CadastroEvento } from './cadastro-evento';

describe('CadastroEvento', () => {
  let component: CadastroEvento;
  let fixture: ComponentFixture<CadastroEvento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroEvento, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroEvento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should keep save disabled while the form is invalid', () => {
    expect(component.formularioInvalido()).toBeTruthy();
  });

  it('should save a valid event and append to the list', () => {
    component.evento = {
      id: 0,
      titulo: 'Workshop Angular',
      data: '2026-10-20',
      local: 'Auditório',
      emailResponsavel: 'teste@email.com',
      vagas: 30,
    };

    component.salvar();

    expect(component.eventos.length).toBe(1);
    expect(component.eventos[0].id).toBe(1);
    expect(component.evento.titulo).toBe('');
  });
});
