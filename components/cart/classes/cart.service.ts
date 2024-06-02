import type { Cart } from "~/components/cart/types/cart.interface";

class CartService {
  private constructor() {}

  public static pay() {
    return {
      redirectToSuccessOrderPage: (): void => {
        useRouter().push({ path: "/success-order" });
      },

      toServer: async (cart: Cart) => {
        const response = await fetch('grokhotov.com', {
          method: "POST",
          body: JSON.stringify(cart),
        });

        if (!response.ok) {
          throw new Error(`Ошибка: ${JSON.stringify(response)}`);
        }

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
}

export { CartService };
