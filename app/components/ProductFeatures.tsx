import React from "react";
import { useTranslations } from "next-intl";

const ProductFeatures = () => {
  const t = useTranslations("productFeatures");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex flex-col items-center text-center p-4">
        <div className="w-16 h-16 mb-4">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0ZM32 56C17.641 56 6 44.359 6 30C6 15.641 17.641 4 32 4C46.359 4 58 15.641 58 30C58 44.359 46.359 56 32 56Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 8C18.745 8 8 18.745 8 32C8 45.255 18.745 56 32 56C45.255 56 56 45.255 56 32C56 18.745 45.255 8 32 8ZM32 52C20.954 52 12 43.046 12 32C12 20.954 20.954 12 32 12C43.046 12 52 20.954 52 32C52 43.046 43.046 52 32 52Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 16C23.163 16 16 23.163 16 32C16 40.837 23.163 48 32 48C40.837 48 48 40.837 48 32C48 23.163 40.837 16 32 16ZM32 44C25.373 44 20 38.627 20 32C20 25.373 25.373 20 32 20C38.627 20 44 25.373 44 32C44 38.627 38.627 44 32 44Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 24C27.582 24 24 27.582 24 32C24 36.418 27.582 40 32 40C36.418 40 40 36.418 40 32C40 27.582 36.418 24 32 24ZM32 36C29.791 36 28 34.209 28 32C28 29.791 29.791 28 32 28C34.209 28 36 29.791 36 32C36 34.209 34.209 36 32 36Z"
              fill="#E31837"
            ></path>
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">{t("smartDisplay.title")}</h3>
        <p className="text-sm text-gray-600">{t("smartDisplay.description")}</p>
      </div>

      <div className="flex flex-col items-center text-center p-4">
        <div className="w-16 h-16 mb-4">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0ZM32 56C17.641 56 6 44.359 6 30C6 15.641 17.641 4 32 4C46.359 4 58 15.641 58 30C58 44.359 46.359 56 32 56Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 8C18.745 8 8 18.745 8 32C8 45.255 18.745 56 32 56C45.255 56 56 45.255 56 32C56 18.745 45.255 8 32 8ZM32 52C20.954 52 12 43.046 12 32C12 20.954 20.954 12 32 12C43.046 12 52 20.954 52 32C52 43.046 43.046 52 32 52Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 16C23.163 16 16 23.163 16 32C16 40.837 23.163 48 32 48C40.837 48 48 40.837 48 32C48 23.163 40.837 16 32 16ZM32 44C25.373 44 20 38.627 20 32C20 25.373 25.373 20 32 20C38.627 20 44 25.373 44 32C44 38.627 38.627 44 32 44Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 24C27.582 24 24 27.582 24 32C24 36.418 27.582 40 32 40C36.418 40 40 36.418 40 32C40 27.582 36.418 24 32 24ZM32 36C29.791 36 28 34.209 28 32C28 29.791 29.791 28 32 28C34.209 28 36 29.791 36 32C36 34.209 34.209 36 32 36Z"
              fill="#E31837"
            ></path>
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">{t("qrCode.title")}</h3>
        <p className="text-sm text-gray-600">{t("qrCode.description")}</p>
      </div>

      <div className="flex flex-col items-center text-center p-4">
        <div className="w-16 h-16 mb-4">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0ZM32 56C17.641 56 6 44.359 6 30C6 15.641 17.641 4 32 4C46.359 4 58 15.641 58 30C58 44.359 46.359 56 32 56Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 8C18.745 8 8 18.745 8 32C8 45.255 18.745 56 32 56C45.255 56 56 45.255 56 32C56 18.745 45.255 8 32 8ZM32 52C20.954 52 12 43.046 12 32C12 20.954 20.954 12 32 12C43.046 12 52 20.954 52 32C52 43.046 43.046 52 32 52Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 16C23.163 16 16 23.163 16 32C16 40.837 23.163 48 32 48C40.837 48 48 40.837 48 32C48 23.163 40.837 16 32 16ZM32 44C25.373 44 20 38.627 20 32C20 25.373 25.373 20 32 20C38.627 20 44 25.373 44 32C44 38.627 38.627 44 32 44Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 24C27.582 24 24 27.582 24 32C24 36.418 27.582 40 32 40C36.418 40 40 36.418 40 32C40 27.582 36.418 24 32 24ZM32 36C29.791 36 28 34.209 28 32C28 29.791 29.791 28 32 28C34.209 28 36 29.791 36 32C36 34.209 34.209 36 32 36Z"
              fill="#E31837"
            ></path>
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">{t("mobilePhone.title")}</h3>
        <p className="text-sm text-gray-600">{t("mobilePhone.description")}</p>
      </div>

      <div className="flex flex-col items-center text-center p-4">
        <div className="w-16 h-16 mb-4">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0ZM32 56C17.641 56 6 44.359 6 30C6 15.641 17.641 4 32 4C46.359 4 58 15.641 58 30C58 44.359 46.359 56 32 56Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 8C18.745 8 8 18.745 8 32C8 45.255 18.745 56 32 56C45.255 56 56 45.255 56 32C56 18.745 45.255 8 32 8ZM32 52C20.954 52 12 43.046 12 32C12 20.954 20.954 12 32 12C43.046 12 52 20.954 52 32C52 43.046 43.046 52 32 52Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 16C23.163 16 16 23.163 16 32C16 40.837 23.163 48 32 48C40.837 48 48 40.837 48 32C48 23.163 40.837 16 32 16ZM32 44C25.373 44 20 38.627 20 32C20 25.373 25.373 20 32 20C38.627 20 44 25.373 44 32C44 38.627 38.627 44 32 44Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 24C27.582 24 24 27.582 24 32C24 36.418 27.582 40 32 40C36.418 40 40 36.418 40 32C40 27.582 36.418 24 32 24ZM32 36C29.791 36 28 34.209 28 32C28 29.791 29.791 28 32 28C34.209 28 36 29.791 36 32C36 34.209 34.209 36 32 36Z"
              fill="#E31837"
            ></path>
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">{t("maintenance.title")}</h3>
        <p className="text-sm text-gray-600">{t("maintenance.description")}</p>
      </div>

      <div className="flex flex-col items-center text-center p-4">
        <div className="w-16 h-16 mb-4">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0ZM32 56C17.641 56 6 44.359 6 30C6 15.641 17.641 4 32 4C46.359 4 58 15.641 58 30C58 44.359 46.359 56 32 56Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 8C18.745 8 8 18.745 8 32C8 45.255 18.745 56 32 56C45.255 56 56 45.255 56 32C56 18.745 45.255 8 32 8ZM32 52C20.954 52 12 43.046 12 32C12 20.954 20.954 12 32 12C43.046 12 52 20.954 52 32C52 43.046 43.046 52 32 52Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 16C23.163 16 16 23.163 16 32C16 40.837 23.163 48 32 48C40.837 48 48 40.837 48 32C48 23.163 40.837 16 32 16ZM32 44C25.373 44 20 38.627 20 32C20 25.373 25.373 20 32 20C38.627 20 44 25.373 44 32C44 38.627 38.627 44 32 44Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 24C27.582 24 24 27.582 24 32C24 36.418 27.582 40 32 40C36.418 40 40 36.418 40 32C40 27.582 36.418 24 32 24ZM32 36C29.791 36 28 34.209 28 32C28 29.791 29.791 28 32 28C34.209 28 36 29.791 36 32C36 34.209 34.209 36 32 36Z"
              fill="#E31837"
            ></path>
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">{t("repair.title")}</h3>
        <p className="text-sm text-gray-600">{t("repair.description")}</p>
      </div>

      <div className="flex flex-col items-center text-center p-4">
        <div className="w-16 h-16 mb-4">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0ZM32 56C17.641 56 6 44.359 6 30C6 15.641 17.641 4 32 4C46.359 4 58 15.641 58 30C58 44.359 46.359 56 32 56Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 8C18.745 8 8 18.745 8 32C8 45.255 18.745 56 32 56C45.255 56 56 45.255 56 32C56 18.745 45.255 8 32 8ZM32 52C20.954 52 12 43.046 12 32C12 20.954 20.954 12 32 12C43.046 12 52 20.954 52 32C52 43.046 43.046 52 32 52Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 16C23.163 16 16 23.163 16 32C16 40.837 23.163 48 32 48C40.837 48 48 40.837 48 32C48 23.163 40.837 16 32 16ZM32 44C25.373 44 20 38.627 20 32C20 25.373 25.373 20 32 20C38.627 20 44 25.373 44 32C44 38.627 38.627 44 32 44Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 24C27.582 24 24 27.582 24 32C24 36.418 27.582 40 32 40C36.418 40 40 36.418 40 32C40 27.582 36.418 24 32 24ZM32 36C29.791 36 28 34.209 28 32C28 29.791 29.791 28 32 28C34.209 28 36 29.791 36 32C36 34.209 34.209 36 32 36Z"
              fill="#E31837"
            ></path>
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">{t("battery.title")}</h3>
        <p className="text-sm text-gray-600">{t("battery.description")}</p>
      </div>

      <div className="flex flex-col items-center text-center p-4">
        <div className="w-16 h-16 mb-4">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0ZM32 56C17.641 56 6 44.359 6 30C6 15.641 17.641 4 32 4C46.359 4 58 15.641 58 30C58 44.359 46.359 56 32 56Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 8C18.745 8 8 18.745 8 32C8 45.255 18.745 56 32 56C45.255 56 56 45.255 56 32C56 18.745 45.255 8 32 8ZM32 52C20.954 52 12 43.046 12 32C12 20.954 20.954 12 32 12C43.046 12 52 20.954 52 32C52 43.046 43.046 52 32 52Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 16C23.163 16 16 23.163 16 32C16 40.837 23.163 48 32 48C40.837 48 48 40.837 48 32C48 23.163 40.837 16 32 16ZM32 44C25.373 44 20 38.627 20 32C20 25.373 25.373 20 32 20C38.627 20 44 25.373 44 32C44 38.627 38.627 44 32 44Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 24C27.582 24 24 27.582 24 32C24 36.418 27.582 40 32 40C36.418 40 40 36.418 40 32C40 27.582 36.418 24 32 24ZM32 36C29.791 36 28 34.209 28 32C28 29.791 29.791 28 32 28C34.209 28 36 29.791 36 32C36 34.209 34.209 36 32 36Z"
              fill="#E31837"
            ></path>
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">{t("covers.title")}</h3>
        <p className="text-sm text-gray-600">{t("covers.description")}</p>
      </div>

      <div className="flex flex-col items-center text-center p-4">
        <div className="w-16 h-16 mb-4">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0ZM32 56C17.641 56 6 44.359 6 30C6 15.641 17.641 4 32 4C46.359 4 58 15.641 58 30C58 44.359 46.359 56 32 56Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 8C18.745 8 8 18.745 8 32C8 45.255 18.745 56 32 56C45.255 56 56 45.255 56 32C56 18.745 45.255 8 32 8ZM32 52C20.954 52 12 43.046 12 32C12 20.954 20.954 12 32 12C43.046 12 52 20.954 52 32C52 43.046 43.046 52 32 52Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 16C23.163 16 16 23.163 16 32C16 40.837 23.163 48 32 48C40.837 48 48 40.837 48 32C48 23.163 40.837 16 32 16ZM32 44C25.373 44 20 38.627 20 32C20 25.373 25.373 20 32 20C38.627 20 44 25.373 44 32C44 38.627 38.627 44 32 44Z"
              fill="#E31837"
            ></path>
            <path
              d="M32 24C27.582 24 24 27.582 24 32C24 36.418 27.582 40 32 40C36.418 40 40 36.418 40 32C40 27.582 36.418 24 32 24ZM32 36C29.791 36 28 34.209 28 32C28 29.791 29.791 28 32 28C34.209 28 36 29.791 36 32C36 34.209 34.209 36 32 36Z"
              fill="#E31837"
            ></path>
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">{t("frame.title")}</h3>
        <p className="text-sm text-gray-600">{t("frame.description")}</p>
      </div>
    </div>
  );
};

export default ProductFeatures; 