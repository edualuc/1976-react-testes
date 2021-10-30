import React from 'react';
import { render, screen } from '@testing-library/react';

import App, { calcularNovoSaldo } from './App';

describe('Componente principal', () => {
  describe('Quando abre app o app do banco', () => {
    it('o nome deve ser exibido', () => {
      render(<App />);
      expect(screen.getByText('ByteBank')).toBeInTheDocument();
    });

    it('o saldo deve ser exibido', () => {
      render(<App />);
      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    })
    it('o botão deve ser exibido', () => {
      render(<App />);
      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    })
  })
  describe('Quando realizo um transação', () => {
    it('que é um saque, o valor vai diminuir', () => {
      const valores = {
        transacao: 'saque',
        valor: 50,
      };
      const novoSaldo = calcularNovoSaldo(valores, 150);
      expect(novoSaldo).toBe(100);
    })
    it('que é um saque, de um valor que maior que o que tem na conta', () => {
      const valores = {
        transacao: 'saque',
        valor: 60,
      };
      const novoSaldo = calcularNovoSaldo(valores, 50);
      expect(novoSaldo).toBe(-10);
    })

    it('que é um deposito, o valor vai aumentar', () => {
      const valores = {
        transacao: 'deposito',
        valor: 50,
      };
      const novoSaldo = calcularNovoSaldo(valores, 150);
      expect(novoSaldo).toBe(200);
    })
  })
})

