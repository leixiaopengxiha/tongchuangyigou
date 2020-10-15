<template>
	<view class="bigBox">
		<view v-for="(item,index) in jiaXinwen" class="bigBox_center">
			<view class="bigBox_center_title">
				{{ item.title }}
			</view>
			<view class="bigBox_center_time">
				时间:{{ item.time }}
			</view>
			<view class="bigBox_center_source">
				来源:{{ item.source }}
			</view>
			<view class="bigBox_center_conentOne">
			  {{ item.conentOne }}
			</view>
			<view class="bigBox_center_conentTwo">
			  {{ item.conentTwo }}
			</view>
			<view class="bigBox_center_imgOne">
			  <image class="bigBox_center_imgOne" :src="item.imgOne" mode=""></image>
			</view>
			<view class="bigBox_center_conentThee">
			  {{ item.conentThee }}
			</view>
			<view class="bigBox_center_conentFour">
			  {{ item.conentFour }}
			</view>
			<view class="bigBox_center_imgTwo">
			  <image class="bigBox_center_imgTwo" :src="item.imgTwo" mode=""></image>
			</view>
			<view class="bigBox_center_conentFive">
			  {{ item.conentFive }}
			</view>
			<view class="bigBox_center_conentSix">
			  {{ item.conentSix }}
			</view>
			<view class="bigBox_center_hr"></view>
			<view class="display">
				<view class="bigBox_center_giveUp">
					<uni-icons class="giveUp" type="hand-thumbsup"></uni-icons>
					{{ item.giveUp }}
				</view>
				<view class="bigBox_center_watch">
					<uni-icons class="watch" type="eye"></uni-icons>
					{{ item.watch }}
				</view>
				<view class="bigBox_center_comment">
					<uni-icons class="comment" type="chat"></uni-icons>
					{{ item.comment }}
				</view>
			</view>
		</view>
		<view class="bigBox_pinglun">
			<view class="bigBox_pinglun_hr"></view>
			<view class="bigBox_pinglun_pingluns">全部评论</view>
		</view>
		<view v-for="(item,index) in jiaPinglun" class="bigBox_tucao">
			<view class="bigBox_tucao_touxiang">
				<image class="bigBox_tucao_touxiang" :src="item.img_touxinag" mode=""></image>
			</view>
			<view class="bigBox_tucao_wangming">
				{{ item.wangming }}
			</view>
			<view class="bigBox_tucao_pinglun">
				{{ item.pinglun }}
			</view>
			<view @click="tapGiveUp" class="bigBox_tucao_giveUps">
				<uni-icons type="hand-thumbsup"></uni-icons>
				{{ item.giveUp }}
			</view>
			<view class="bigBox_tucao_time">
				{{ item.time }}
			</view>
		</view>
		<view class="bigBox_fabu">
			<view @click="tapGiveUps" class="bigBox_diansan">
				<uni-icons class="bigBox_hand-thumbsup" type="hand-thumbsup"></uni-icons>
				<p>点赞</p>
			</view>
			<view class="bigBox_diansan_input">
				<input type="text" value="" placeholder="请输入您的评论"/>
			</view>
			<view class="bigBox_anniu">
				发布评论
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				jiaXinwen:[
					{
						title:"“恒昌精准扶贫之路”媒体沟通会在京举办",
						time:"2020-10-12 16:25:25",
						source:"中国公益新闻网",
						conentOne:"落实党和国家的普惠扶贫政策，更有效的为弱势人群、弱势产业和弱势地区提供方便快捷、价格合理的金融服务，在当今众多金融企业中，正在成为越来越受关注的新供给。在新型金融精准扶贫模式中，恒昌公司探索的“基层党组织+产业支持+互联网金融”的新模式因其对区域实体经济的全方位支持，近期更是获得了业内的高度关注。",
						conentTwo:"在此背景下，近日，恒昌公司于北京“金融客咖啡”举办了媒体沟通会，恒昌公司副总裁张然做了现场演讲，详细阐述了恒昌近年来的精准扶贫之路。此外，会议还邀请到了联合国联合开发部署(下称UNDP)成员UNDP驻华代表处《贫苦地区农户创业的金融需求与供给研究》课题协调人曾梦以及媒体嘉宾。会上，恒昌与UNDP就之前的精准扶贫方面的战略合作进行了总结和交流，中西方的交流与碰撞，也令本次媒体沟通会更为专业化、开放化、国际化。",
						imgOne:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3087705303,1740657087&fm=26&gp=0.jpg",
						conentThee:"值得关注的是，会议期间还展示了恒昌精准扶贫的最新成果，来自恒昌扶持的重庆西阳的地方特产西阳土鸡、麻旺鸭、苦荞黄酒以及苦荞月饼，这些产品均由西阳桃花源公司出品。在“基层党组织+产业支持+互联网金融”模式的全面助力下，西阳当地特色产品已经开始形成新的产销链条，有效促进了当地实业发展。",
						conentFour:"UNDP联合国开发计划部署驻华代表处国别副主任何佩德(Patrick Haverman)表示，UNDP联合国开发计划部署在中国已经走过30个年头，这30年里，UNDP致力于帮助中国发展更多的扶贫组织，并在能源与环境、扶贫权益和组织监管、灾后管理和灾后重建等方面与恒昌公司合作，在普惠金融方面做出了许多努力。如今面临着大数据、深度学习和自动化的机遇与挑战，再次趋势下，希望恒昌公司在联合国可持续发展目标框架下，把更多的扶贫人口纳入到互联网金融体系之中，UNDP也会把中国成功的经验推广给其他发展中国家，推动南南和南北合作。",
						imgTwo:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3104686528,572431609&fm=26&gp=0.jpg",
						conentFive:"课题协调曾梦女士对恒昌与UNDP战略合作的第一期项目进行了总结。他表示，UNDP与恒昌的合作项目共分为三大板块:建立国内外合作伙伴关系，推动全方位合作和惠普金融研究。其中，惠普金融研究板块对“扶贫地区农户创业金融需求与供给研究”进行了调研，内容涉及研究的意义和目的、研究方法与调研样本选择、抽样农户特征、农户创业意愿等。通过全方位的调研，得出一系列政策建议，包括强化信用体系建设，推动土地经营权抵押，缓解贫困地区农业新型经营主体融资困局，加强对意愿创业农户的技术培训，建立完善的风险分担和转移机制等。",
						conentSix:"恒昌公司副总裁张然也对恒昌的“精准扶贫之路”做了解读。恒昌作为惠普金融的参与者和实践者，自成立以来始终致力于推动惠普金融的发展，帮助千万小微企业主、工薪阶层和农民释放信用价值，提供资金解决方案。对于“精准扶贫”，恒昌经历了三个阶段的摸索:2011-2015年，初步探索互联网农村金融市场；2015年开始探索“基层党组织+产业支持+互联网金融模式”如今，恒昌公司在精准扶贫领域已经取得了一定的成果，今后将通过数字惠普和大数据技术，更精准地锁定目标人群、了解农户需求现状，通过供应链等模式创新，帮助扶贫对象拓宽销售渠道，增加农户的创收能力。",
						"giveUp": "123",
						"watch": "123",
						"comment": "123"
						
					}
				],
				jiaPinglun:[
					{
						"img_touxinag":"https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg",
						"wangming":"滚滚长江东逝水",
						"pinglun":"可搭配不同系列堆堆袜，再配上俏皮的风格的服装或者复古简约风等等都是非常好看的",
						"giveUp": "2",
						"time":"10分钟前"
					}
				]
			}
		},
		methods: {
			// 新闻详情点赞事件01
			tapGiveUp(){},
			// 新闻详情点赞事件02
			tapGiveUps(){}
		}
	}
</script>

<style lang="less" scoped>
	.bigBox{
		.bigBox_center{
			width: 90%;
			height: 1880px;
			border-radius: 15px;
			background: #FFFEFF;
			box-shadow: 0px 3px 5px #CCCCCC;
			margin: 15px auto;
			overflow: hidden;
			.bigBox_center_title{
				font-size: 15px;
				font-weight: 700;
				font-family: 微软雅黑;
				text-align: center;
				margin-top: 10px;
			}
			.bigBox_center_time{
				font-size: 10px;
				color: #D0D0D0;
				float: left;
				margin-left: 37px;
				margin-top: 10px;
			}
			.bigBox_center_source{
				font-size: 10px;
				color: #D0D0D0;
				float: right;
				margin-right: 30px;
				margin-top: 10px;
			}
			.bigBox_center_conentOne{
				width: 90%;
				height: 160px;
				margin: 40px auto;
				font-size: 15px;
				color: #D0D0D0;
				font-family: 微软雅黑;
			}
			.bigBox_center_conentTwo{
				width: 90%;
				height: 220px;
				margin: -20px auto;
				font-size: 15px;
				color: #D0D0D0;
				font-family: 微软雅黑;
			}
			.bigBox_center_imgOne{
				width: 310px;
				height: 150px;
				margin: 20px auto;
				border-radius: 15px;
			}
			.bigBox_center_conentThee{
				width: 90%;
				height: 140px;
				margin: 35px auto;
				font-size: 15px;
				color: #D0D0D0;
				font-family: 微软雅黑;
			}
			.bigBox_center_conentFour{
				width: 90%;
				height: 260px;
				margin: -15px auto;
				font-size: 15px;
				color: #D0D0D0;
				font-family: 微软雅黑;
			}
			.bigBox_center_imgTwo{
				width: 310px;
				height: 150px;
				margin: 20px auto;
				border-radius: 15px;
			}
			.bigBox_center_conentFive{
				width: 90%;
				height: 260px;
				margin: 40px auto;
				font-size: 15px;
				color: #D0D0D0;
				font-family: 微软雅黑;
			}
			.bigBox_center_conentSix{
				width: 90%;
				height: 280px;
				margin: -20px auto;
				font-size: 15px;
				color: #D0D0D0;
				font-family: 微软雅黑;
			}
			.bigBox_center_hr{
				width: 90%;
				margin: 35px auto;
				border: 1px solid #F0F0F0;
			}
			.display{
				display: flex;
				justify-content: space-around;
				margin-top: -30px;
			}
		}
		.bigBox_pinglun{
			width: 90%;
			height: 25px;
			margin: 0 auto;
			.bigBox_pinglun_hr{
				float: left;
				width: 5px;
				height: 21px; 
				border-radius: 5px;
				background: #007AFF;
			}
			.bigBox_pinglun_pingluns{
				margin-left: 10px;
			}
		}
		.bigBox_tucao{
			width: 85%;
			height: 120px;
			margin: 35rpx auto;
			background-color: #FFFFFF;
			border-radius: 25rpx;
			padding: 30rpx;
			box-shadow: 0px 0px 0px 3px #F9F9F9;
			overflow: hidden;
			.bigBox_tucao_touxiang{
				width: 45px;
				height: 45px;
				border-radius: 50px;
				float: left;
			}
			.bigBox_tucao_wangming{
				font-size: 15px;
				font-weight: 700;
				font-family: 微软雅黑;
				margin-top: 11px;
			}
			.bigBox_tucao_pinglun{
				margin-top: -5px;
				display: inline-block;
				margin-left: 45px;
				font-size: 13px;
				font-weight: 700;
				font-family: 微软雅黑;
				color: #C0C0C0;
			}
			.bigBox_tucao_giveUps{
				float: right;
        margin-top: -85px;
			}
			.bigBox_tucao_time{
				font-size: 12px;
				font-weight: 700;
				color: #C0C0C0;
				display: inline-block;
				margin-left: 43px;
			}
		}
		.bigBox_fabu{
			width: 90%;
			height: 50px;
			margin: 0 auto;
			position: relative;
			.bigBox_diansan{
				display: inline-block;
				font-size: 12px;
				color: #BABABA;
				.bigBox_hand-thumbsup{
					margin-left: 5px;
				}
			}
			.bigBox_diansan_input{
				display: inline-block;
				margin-left: 25px;
			}
			.bigBox_diansan_input input{
				width: 150px;
				height: 30px;
				border-radius: 10px;
				padding-left: 5px;
				background: #EEEEEE;
			}
			.bigBox_anniu{
				display: inline-block;
				width: 100px;
				height: 30px;
				color: #FFFFFF;
				text-align: center;
				line-height: 30px;
				border-radius: 15px;
				background: #34DBB0;
				position: absolute;
				right: 5px;
			}
		}
	}
</style>
