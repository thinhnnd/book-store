import * as express from 'express';
import { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { Book } from 'models/Book.model';

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 5000;

app.get('/', (_req: Request, res: Response) => {
  res.send('ExpressJS has worked successfuly!');
});

app.get('/books', (_req: Request, res: Response) => {
  let book: Book[] = [
    {
      title: 'Thiên Nga Đen (Tái Bản 2020)',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/c7/a2/3a/c9e6eaa17656191e9fdd8febea6dd87c.jpg.webp',
      category: 'drama',
      quantity: 50,
      price: 100000,
      description: `Trước khi khám phá ra thiên nga đen tồn tại trên đời (ở Úc), người ta vẫn tin rằng tất cả chim thiên nga trên đời đều có màu trắng. Phát hiện bất ngờ này đã thay đổi toàn bộ thế giới quan của nhân loại (về thiên nga).
      Chúng ta không biết rất nhiều thứ nhưng lại{ hành động như thể mình có khả năng dự đoán được mọi điều. Và trong cuốn sách này, tác giả Nassim Nicholas Taleb đã đi sâu vào khai thác những sai lầm của tư tưởng cố hữu ấy. Theo ông, “thiên nga đen” là một biến cố tưởng chừng như không thể xảy ra với ba đặc điểm chính: không thể dự đoán, có tác động nặng nề và sau khi nó xảy ra, người ta lại dựng lên một lời giải thích để khiến nó trở nên ít ngẫu nhiên hơn, dễ dự đoán hơn so với bản chất thật của nó. Thành công đáng kinh ngạc của Facebook có thể được coi là một “thiên nga đen”, việc nước Anh rời khỏi Liên minh châu u cũng là một “thiên nga đen”. Thiên nga đen luôn ẩn hiện trong mọi mặt của cuộc sống với những tác động khó lường, theo cả hướng tiêu cực và tích cực.
      Tinh tế, táo bạo nhưng không kém phần thú vị, Thiên Nga Đen chắc chắn là cuốn sách không thể bỏ qua cho những ai đam mê hiểu biết. Và cuốn sách này, bản thân nó cũng chính là một thiên nga đen…`,
    },
    {
      title: 'Sức Mạnh Của Thói Quen (Tái Bản)',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/a9/11/cd/8db57c8fd3685e41109da91542dae1d5.jpg',
      category: 'drama',
      quantity: 50,
      price: 100000,
      description: `Về cơ bản, người lớn và trẻ em không khác nhau là mấy. Bởi hầu hết những hành động hàng ngày của chúng ta đều là sản phẩm của thói quen vô thức. Thế nhưng không phải cá nhân, tổ chức nào cũng có được thành công. Đó là vì mỗi người có những thói quen riêng. Vậy thói quen nào mới giúp bạn thành công? Trong cuốn sách “Sức mạnh của thói quen”, Charles Duhigg sẽ giải đáp thắc mắc ấy.

      Chìa khoá quan trọng nhất để mở cánh cửa thành công chính là sự kết hợp nhuần nhuyễn những thói quen tốt với nhau. Câu hỏi đặt ra là làm thế nào để phân biệt thói quen tốt và thói quen xấu? Thói quen có nằm trong tầm kiểm soát của chúng ta hay không? Với ba phần khá đầy đặn, “Sức mạnh của thói quen” cho bạn cái nhìn toàn diện không chỉ về thói quen cá nhân, của tổ chức mà còn là của toàn xã hội, cùng với lời khuyên để vận dụng các thói quen đó. Muốn thay đổi thói quen, bạn phải phá vỡ những việc làm tuỳ hứng hàng ngày – câu “thần chú” này chỉ đường cho bạn tới thành công.`,
    },
  ];
  res.send(book);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
