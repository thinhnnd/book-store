import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/common/category.enum';
import { IBook } from '../book-list/book.interface';

@Component({
  template: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  id: string | null;

  book: IBook;

  constructor(private route: ActivatedRoute) {
    this.id = '';
    this.book = {
      _id: '1',
      title: 'Quà tặng cuộc sống',
      category: Category.drama,
      price: 6.99,
      quantity: 100,
      image:
        'https://salt.tikicdn.com/cache/400x400/media/catalog/product/q/u/qua-tang-cuoc-song-a.jpg',
      description: `Trong cuộc sống, không phải ngẫu nhiên mà mọi việc diễn ra đều có chủ đích. Không có gì xảy ra mà do tình cờ hay may rủi. Bệnh tật, tổn thương, đổ vỡ hay niềm vui, nụ cười… đều là những trải nghiệm đáng trân trọng trong cuộc đời bạn – những bài học vô giá. Nếu không có chúng, cuộc đời của chúng ta cũng chỉ là một lối đi thẳng tắp, một con đường không hề có đích đến, một chuỗi ngày sống mà không hề ước mơ. Con đường ấy tuy an toàn và dễ chịu nhưng rất nhàm chán và vô vị.

      Quà Tặng Cuộc Sống là một trong những ấn phẩm có giá trị của First News nhằm đưa ra những lời khuyên bổ ích giúp bạn nhận ra giá trị đích thực của cuộc sống, của chính bản thân mình, đồng thời định hướng cho bạn con đường tiến về phía trước.`,
    };
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
