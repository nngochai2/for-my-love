import React from 'react'
import Timer from '../components/Timer'
import Picture from '../assets/image_1.jpg'
import Letter from '../components/Letter';

const HomePage = () => {
	const anniversaryDate = new Date(2022, 5, 1);
	
	const letterContent = `Hế lu phanh thúi. Nhân dịp 20/10 tới anh chưa biết tặng gì (với cả anh lười chuyển tiền quạ) nên anh muốn làm website này tặng em.

Do deadlines đang dí anh căng cực căng quá nên là web ở thời điểm hiện tại chưa có gì mấy đâu. Nhưng mà web sẽ liên tục cập nhật để ra nhiều tính năng hay ho, vừa dành tặng phanh vừa để anh luyện code nữa :>

Chúc Phanh mãi tuyệt vời như này ><`;

	return (
		<div className="min-h-screen bg-pink-50 pt-16 pb-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
					<div className="md:flex">
						<div className="md:flex-shrink-0 p-4">
							<div className="rounded-2xl overflow-hidden shadow-inner border-4 border-pink-300">
								<img className="h-64 w-full object-cover md:w-64" src={Picture} alt="Anniversary" />
							</div>
						</div>
						<div className="p-8 flex-grow flex items-center justify-center">
							<Timer anniversaryDate={anniversaryDate} />
						</div>
					</div>
				</div>
				<Letter content={letterContent} />
			</div>
		</div>
	);
}

export default HomePage
