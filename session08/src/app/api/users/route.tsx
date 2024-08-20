import { NextResponse } from "next/server";
// lấy ở trong cơ sở dữ liệu
// dùng api tương tác vào csdl ==> data
const users = [
  {
    id: 1,
    name: "John Doe",
    address: "hn",
  },
  {
    id: 2,
    name: "hồng vân",
    address: "hcm",
  },
  {
    id: 3,
    name: "Hoa",
    address: "dn",
  },
];
export async function GET(req: any, res: any) {
  console.log(res);

  return NextResponse.json({
    data: users,
  });
}
export async function POST(req: any) {
  const data = await req.json();
  console.log(data);

  return NextResponse.json("thêm mới thông tin tài khoản thành công", data);
}
