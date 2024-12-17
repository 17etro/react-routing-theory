"use server";

import { cookies } from "next/headers";

export const setCookieByKey = async (key: string, value: string) => {
  const _cookies = await cookies();

  _cookies.set(key, value);
};

export const getCookieByKey = async (key: string) => {
  const _cookies = await cookies();

  const cookie = _cookies.get(key);

  if (!cookie) return null;

  return cookie.value;
};

export const deleteCookieByKey = async (key: string) => {
  const _cookies = await cookies();

  _cookies.delete(key);
};
