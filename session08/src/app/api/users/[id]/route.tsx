import { NextResponse } from "next/server";
// lấy ở trong cơ sở dữ liệu
// dùng api tương tác vào csdl ==> data
const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "hồng vân",
  },
  {
    id: 3,
    name: "Hoa",
  },
];
export async function GET(req: any, res: any) {
  console.log(res);
  let find = users.find((item) => {
    return item.id === +res.params.id;
  });
  console.log("1111111111", find);

  return NextResponse.json({
    message: find ? find : " không tìm thấy",
  });
}
export async function PUT(req: any) {
  const data = await req.json();
  console.log(data);

  return NextResponse.json("cập nhật thông tin tài khoản thành công");
}
export async function PATCH(req: any) {
  const data = await req.json();
  console.log(data);

  return NextResponse.json("cập nhật user thành công với method patch");
}
export async function DELETE(req: any) {
  const data = await req.json();
  console.log(data);

  return NextResponse.json({
    message: "xoá thông tin tài khoản thành công",
    user: data,
  });
}
