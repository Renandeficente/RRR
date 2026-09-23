import {formatarPreco} from './formatarPreco';

describe("formatarPreco", () => {

    test("formata um valor comum no padrâo brasileiro", () => {
        const resultado = formatarPreco(99.9);
        expect(resultado).toBe("R$ 99,90");
    });

    test("sempre mostra duas casas decimais", () => {
        expect(formatarPreco(19)).toBe("R$ 19,00");
        expect(formatarPreco(1234.5)).toBe("R$ 1234,50");
    });

    test("usa vírgula, e não ponto, como separador", () => {
        expect(formatarPreco(10.25)).toBe("R$ 10,25");
        expect(formatarPreco(10.25)).toContain(",");

    });

    test("formata zero com duas casas decimais", () => {
        expect(formatarPreco(0)).toBe("R$ 0,00");
    });

    test("retorna zero para valores inválidos", () => {
        expect(formatarPreco("10")).toBe("0,00");
        expect(formatarPreco(NaN)).toBe("0,00");
    });

    test("preserva o sinal de valores negativos", () => {
        expect(formatarPreco(-25.5)).toBe("R$ -25,50");
    });
    test("arredonda a terceira casa decimal", () => {
    expect(formatarPreco(9.999)).toBe("R$ 10,00");
  });

  test("aceita zero sem quebrar", () => {
    expect(formatarPreco(0)).toBe("R$ 0,00");
  });

  test("não quebra quando o preço não veio do banco", () => {
    expect(formatarPreco(undefined)).toBe("R$ 0,00");
    expect(formatarPreco(null)).toBe("R$ 0,00");
    expect(formatarPreco("banana")).toBe("R$ 0,00");
  });
})