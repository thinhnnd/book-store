import { Book } from '../books/models/book.model';
import { Category } from '../common/category.enum';
import { UserType } from '../common/user-type.enum';
import { User } from '../models/user.model';

// use library instead of hard coding
// dataseeding
export class MockUtil {
  static BOOKLIST_DATA: Book[] = [
    {
      _id: '1',
      title: 'Thiên Nga Đen (Tái Bản 2020)',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/c7/a2/3a/c9e6eaa17656191e9fdd8febea6dd87c.jpg.webp',
      category: Category.drama,
      quantity: 50,
      price: 100000,
      description: `Trước khi khám phá ra thiên nga đen tồn tại trên đời (ở Úc), người ta vẫn tin rằng tất cả chim thiên nga trên đời đều có màu trắng. Phát hiện bất ngờ này đã thay đổi toàn bộ thế giới quan của nhân loại (về thiên nga).
        Chúng ta không biết rất nhiều thứ nhưng lại{ hành động như thể mình có khả năng dự đoán được mọi điều. Và trong cuốn sách này, tác giả Nassim Nicholas Taleb đã đi sâu vào khai thác những sai lầm của tư tưởng cố hữu ấy. Theo ông, “thiên nga đen” là một biến cố tưởng chừng như không thể xảy ra với ba đặc điểm chính: không thể dự đoán, có tác động nặng nề và sau khi nó xảy ra, người ta lại dựng lên một lời giải thích để khiến nó trở nên ít ngẫu nhiên hơn, dễ dự đoán hơn so với bản chất thật của nó. Thành công đáng kinh ngạc của Facebook có thể được coi là một “thiên nga đen”, việc nước Anh rời khỏi Liên minh châu u cũng là một “thiên nga đen”. Thiên nga đen luôn ẩn hiện trong mọi mặt của cuộc sống với những tác động khó lường, theo cả hướng tiêu cực và tích cực.
        Tinh tế, táo bạo nhưng không kém phần thú vị, Thiên Nga Đen chắc chắn là cuốn sách không thể bỏ qua cho những ai đam mê hiểu biết. Và cuốn sách này, bản thân nó cũng chính là một thiên nga đen…`,
    },
    {
      _id: '2',
      title: 'Sức Mạnh Của Thói Quen (Tái Bản)',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/a9/11/cd/8db57c8fd3685e41109da91542dae1d5.jpg',
      category: Category.drama,
      quantity: 50,
      price: 100000,
      description: `Về cơ bản, người lớn và trẻ em không khác nhau là mấy. Bởi hầu hết những hành động hàng ngày của chúng ta đều là sản phẩm của thói quen vô thức. Thế nhưng không phải cá nhân, tổ chức nào cũng có được thành công. Đó là vì mỗi người có những thói quen riêng. Vậy thói quen nào mới giúp bạn thành công? Trong cuốn sách “Sức mạnh của thói quen”, Charles Duhigg sẽ giải đáp thắc mắc ấy.
  
        Chìa khoá quan trọng nhất để mở cánh cửa thành công chính là sự kết hợp nhuần nhuyễn những thói quen tốt với nhau. Câu hỏi đặt ra là làm thế nào để phân biệt thói quen tốt và thói quen xấu? Thói quen có nằm trong tầm kiểm soát của chúng ta hay không? Với ba phần khá đầy đặn, “Sức mạnh của thói quen” cho bạn cái nhìn toàn diện không chỉ về thói quen cá nhân, của tổ chức mà còn là của toàn xã hội, cùng với lời khuyên để vận dụng các thói quen đó. Muốn thay đổi thói quen, bạn phải phá vỡ những việc làm tuỳ hứng hàng ngày – câu “thần chú” này chỉ đường cho bạn tới thành công.`,
    },
    {
      _id: '3',
      title: 'Book 2',
      image:
        'https://salt.tikicdn.com/cache/400x400/ts/product/a9/11/cd/8db57c8fd3685e41109da91542dae1d5.jpg',
      category: Category.drama,
      quantity: 50,
      price: 100000,
      description:
        'Trong độ xuân xanh phơi phới ngày ấy, bạn không dám mạo hiểm, không dám nỗ lực để kiếm học bổng, không chịu tìm tòi những thử thách trong công việc, không phấn đấu hướng đến ước mơ của mình. Bạn mơ mộng rằng làm việc xong sẽ vào làm ở một công ty nổi tiếng, làm một thời gian sẽ thăng quan tiến chức. Mơ mộng rằng khởi nghiệp xong sẽ lập tức nhận được tiền đầu tư, cầm được tiền đầu tư là sẽ niêm yết trên sàn chứng khoán. Mơ mộng rằng muốn gì sẽ có đó, không thiếu tiền cũng chẳng thiếu tình, an hưởng những năm tháng êm đềm trong cuộc đời mình. Nhưng vì sao bạn lại nghĩ rằng bạn chẳng cần bỏ ra chút công sức nào, cuộc sống sẽ dâng đến tận miệng những thứ bạn muốn? Bạn cần phải hiểu rằng: Hấp tấp muốn mau chóng thành công rất dễ khiến chúng ta đi vào mê lộ. Thanh xuân là khoảng thời gian đẹp đẽ nhất trong đời, cũng là những năm tháng then chốt có thể quyết định tương lai của một người. Nếu bạn lựa chọn an nhàn trong 10 năm, tương lai sẽ buộc bạn phải vất vả trong 50 năm để bù đắp lại. Nếu bạn bươn chải vất vả trong 10 năm, thứ mà bạn chắc chắn có được là 50 năm hạnh phúc. Điều quý giá nhất không phải là tiền mà là tiền bạc. Thế nên, bạn à, đừng lựa chọn an nhàn khi còn trẻ.',
    },
  ];

  USERS: User[] = [
    {
      id: '1',
      email: 'admin@bookstore.io',
      password: 'a123456@',
      name: 'Admin',
      type: UserType.admin,
    },
    {
      id: '2',
      email: 'guest01@bookstore.io',
      password: 'a123456@',
      name: 'Guest 01',
      type: UserType.normal,
    },
    {
      id: '3',
      email: 'guest02@bookstore.io',
      password: 'a123456@',
      name: 'Guest 02',
      type: UserType.normal,
    },
  ];
}

export default MockUtil;
