import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  // for making handle request on demand rather than on build
  cookies();
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;

  return NextResponse.json(products.slice(), {
    headers: {
      "Cache-Control": "max-age=86400",
    },
  });

  // return NextResponse.json(products.slice(0, products.length - 20), {
  //   headers: {
  //     "Cache-Control": "max-age=86400",
  //   },
  // });
}
