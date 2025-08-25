import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import hero from "./assets/hero.png";
import drums from "./assets/drums.png";
import free from "./assets/free.png";
import discount from "./assets/discount.png";
import bag from "./assets/bag.png";
import ruble from "./assets/ruble.png";
import transfer from "./assets/transfer.png";
import sim from "./assets/sim.png";
import pocket from "./assets/pocket.png";
import light from "./assets/light.png";
import cash from "./assets/cash.png";
import smart from "./assets/smart.png";
import heroTwo from "./assets/heroTwo.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { BottomSheet } from "@alfalab/core-components/bottom-sheet";

interface Product {
  title: string;
  text: string;
  image: string;
}

const familyProducts: Array<Product> = [
  {
    title: "Альфа-Смарт для вас и 2 близких",
    text: "Приглашайте участников в семейную подписку",
    image: smart,
  },
];

const products: Array<Product> = [
  {
    title: "+1 категория с кэшбэком 5%",
    text: "Дополнительная категория каждый месяц",
    image: bag,
  },
  {
    title: "+1 попытка крутить барабан суперкэшбэка",
    text: "Выше шанс выиграть до 100% в случайной категории",
    image: drums,
  },
  {
    title: "+2% годовых",
    text: "По накопительному Альфа-Счёту на ежедневный остаток",
    image: ruble,
  },
  {
    title: "Бесплатная мобильная связь Альфа-Мобайл",
    text: "Тариф Смарт на 3 ГБ, 100 мин, 10 смс и мессенджеры",
    image: sim,
  },
  {
    title: "Увеличенный лимит кэшбэка",
    text: "7000 ₽ в категориях, 10 000 ₽ или миль в сервиса Альфа-Банка",
    image: pocket,
  },
  {
    title: "Эксклюзивный кэшбэк от партнёров",
    text: "Доступ к особой подборке",
    image: light,
  },
  {
    title: "Бесплатные уведомления",
    text: "Пуши и смс об операциях по всем дебетовым картам",
    image: free,
  },
  {
    title: "Бесплатные переводы",
    text: "В любые банки без комиссий",
    image: transfer,
  },
  {
    title: "Увеличенный лимит на снятие наличных",
    text: "Без комиссии в банкоматах любых банков России",
    image: cash,
  },
  {
    title: "На 20% ниже комиссия на бирже",
    text: "0,24% за сделки с ценными бумагами и валютой",
    image: discount,
  },
];

const alfaSmart =
    "alfabank://multistep-route?fromModule=FORM&stepNumber=0&alias=alfa-subscription-alias&version=2";

const Redirect = () => {
  window.location.href = alfaSmart;

  return null;
};


export const App = () => {
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [isMoreClicked, setIsMoreClicked] = useState(false);

  const submit = () => {
    window.gtag("event", "6172_get_sub", {
      variant_name: "6172_1",
    });

    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  if (thxShow) {
    return <Redirect />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={hero} alt="Картинка Альфа-Смарт" />
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
          >
            Альфа-Смарт
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium">
              Первый месяц бесплатно, а далее 399 ₽
          </Typography.Text>
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            В вашей подписке
          </Typography.TitleResponsive>

          {products.map((product) => (
            <div className={appSt.product} key={product.title}>
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                  className={appSt.productTitle}
                >
                  {product.title}
                </Typography.TitleResponsive>

                <Typography.Text
                  view="secondary-large"
                  tag="p"
                  color="secondary"
                  className={appSt.productText}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <img
                src={product.image}
                alt=""
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            Семейный доступ
          </Typography.TitleResponsive>

          {familyProducts.map((product) => (
            <div className={appSt.product} key={product.title}>
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                  className={appSt.productTitle}
                >
                  {product.title}
                </Typography.TitleResponsive>

                <Typography.Text
                  view="secondary-large"
                  tag="p"
                  color="secondary"
                  className={appSt.productText}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <img
                src={product.image}
                alt=""
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>
      </div>

      <Gap size={72} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" href="" onClick={submit}>
          Подключить
        </ButtonMobile>
      </div>

      <BottomSheet open={isMoreClicked} onClose={() => setIsMoreClicked(false)}>
        <div
          className={appSt.box}
          style={{ backgroundColor: "white", paddingBottom: 0, border: "none" }}
        >
          <Gap size={8} />
          <div
            style={{
              padding: "4px 16px",
              backgroundColor: "#F3F4F5",
              width: "fit-content",
              borderRadius: "16px",
              margin: "0 auto",
            }}
          >
            Розыгрыш
          </div>
          <Gap size={8} />
          <div>
            <Typography.TitleResponsive
              tag="h1"
              view="medium"
              font="system"
              weight="bold"
            >
              20 000 000 ₽
            </Typography.TitleResponsive>
            <Typography.Text view="primary-medium">
              Каждый месяц
            </Typography.Text>
          </div>
          <img src={heroTwo} alt="Картинка Альфа-Смарт" />
        </div>
        <Gap size={32} />
        <div
          style={{
            padding: "16px",
            backgroundColor: "#F3F4F5",
            borderRadius: "16px",
          }}
        >
          <Typography.Text view="primary-medium" weight="bold">
            Призы каждый месяц
          </Typography.Text>
          <Gap size={16} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography.Text view="primary-medium" color="secondary">
              10 победителей
            </Typography.Text>
            <Typography.Text view="primary-medium" color="primary">
              1 000 000 ₽
            </Typography.Text>
          </div>
          <Gap size={8} />
          <div style={{ height: "1px", backgroundColor: "lightgray" }}></div>
          <Gap size={8} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography.Text view="primary-medium" color="secondary">
              1000 победителей
            </Typography.Text>
            <Typography.Text view="primary-medium" color="primary">
              10 000 ₽
            </Typography.Text>
          </div>
        </div>
        <Gap size={48} />
        <Typography.TitleResponsive
          tag="h1"
          view="small"
          font="system"
          weight="bold"
        >
          Как это работает
        </Typography.TitleResponsive>
        <Gap size={32} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
                padding: "13px",
                minWidth: "48px",
                height: "48px",
                border: "1px dashed black",
                borderRadius: "50%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              1
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                view="primary-medium"
                color="primary"
                weight="bold"
              >
                Подключите подписку
              </Typography.Text>
              <Typography.Text view="primary-small" color="primary">
                Каждый оплаченный месяц — доступ к розыгрышу
              </Typography.Text>
            </div>
          </div>
        </div>
        <Gap size={16} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
                padding: "13px",
                minWidth: "48px",
                height: "48px",
                border: "1px dashed black",
                borderRadius: "50%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              2
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                view="primary-medium"
                color="primary"
                weight="bold"
              >
                Дождитесь розыгрыша
              </Typography.Text>
              <Typography.Text view="primary-small" color="primary">
                Автоматически выберем 1010 победителей с Альфа-Смартом
              </Typography.Text>
            </div>
          </div>
        </div>
        <Gap size={16} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
                padding: "13px",
                minWidth: "48px",
                height: "48px",
                border: "1px dashed black",
                borderRadius: "50%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              3
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                view="primary-medium"
                color="primary"
                weight="bold"
              >
                Получите приз
              </Typography.Text>
              <Typography.Text view="primary-small" color="primary">
                Деньги зачислятся на ваш счёт
              </Typography.Text>
            </div>
          </div>
        </div>
      </BottomSheet>
    </>
  );
};
