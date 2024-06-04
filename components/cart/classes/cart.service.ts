import type { Cart } from "~/components/cart/types/cart.interface";

class CartService {
  private constructor() {}

  public static pay() {
    return {
      redirectToSuccessOrderPage: (): void => {
        useRouter().push({ path: "/success-order" });
      },

      toServer: async (cart: Cart) => {
        if(!cart.products.length) return alert("Заполните корзину прежде, чем что-то купить")
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            if(cart.products.length) {
              resolve({
                status: true
              });
            }
          }, 1500);
        });



        return { response, context: CartService.pay() };
      }
    }
  }

  public static fixPrice(price: number | string): string {
    if (typeof price == "number") {
      if(!price) return "0"
      return price.toFixed(3).replaceAll('.', ' ');
    }

    return price.replaceAll('.', ' ');
  }

  public static normalizeCountForm = (int: number, array: Array<string>): string => {
    return (array = array || ['товар', 'товара', 'товаров']) && array [
        (int % 100 > 4 && int % 100 < 20)
        ? 2
        : [2, 0, 1, 1, 1, 2][(int % 10 < 5) ? int % 10 : 5]
      ];
  }
}

export { CartService };
