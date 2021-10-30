import { render, renderer } from "@testing-library/react"
import React from "react";

import Transacao from "./Transacao";

describe('Componte de transação do extrato', () => {
  it('O snapshot do componente deve permanacer o sempre o mesmo', () => {
    const { container } = render(<Transacao data="10/08/2020" tipo="saque" valor="20.00" />);
    expect(container.firstChild).toMatchSnapshot();
  });
  // it('O snapshot do componente deve permanacer o sempre o mesmo2', () => {
  //   const transacaoComponent = renderer.create(
  //     <Transacao data="10/08/2020" tipo="saque" valor="20.00" />,
  //   );
  //   const transacaoTree = transacaoComponent.toJSON();
  //   expect(transacaoTree).toMatchSnapshot();
  // });
})