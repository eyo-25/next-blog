import Profile from "@/components/Profile";

export default function AboutPage() {
  return (
    <article>
      <Profile />
      <div className="p-10 mb-40 bg-gray-100 rounded-xl">
        <div className="flex flex-col mb-5">
          <h2 className="mb-2 text-xl font-bold">자기 소개</h2>
          <p>
            안녕하세요 창작물을 만드는걸 즐기는 개발자 박재현 입니다.디자이너
            출신으로서 개발을 할때도 서비스를 기획하고 개발하는 데에 큰 재미와
            성취감을 느끼고 있습니다. 개발을 선택한 이유는 개발을 하면서
            디자인과는 달리 코드의 구현에 따른 확장성, 효율성, 가독성에 따라
            논리적인 설계를 하며 객관적이고 합리적인 구현을 할 수 있다는 점에서
            매력을 느꼇으며 성향에 부합하다고 생각해 프론트엔드 개발자로 진로를
            선택하게 되었습니다.
          </p>
        </div>
        <h2 className="mb-3 text-xl font-bold">나의 강점</h2>
        <p>
          제 강점은 디자이너 출신으로서의 섬세함과 총체적인 경험입니다. 다양한
          디자인 경험을 바탕으로 전체적인 흐름을 고려하여 서비스의 확장성 있는
          컴포넌트 구성과 시스템적인 엣지 케이스를 고려하여 개발하는 능력이
          있습니다. 더불어 뚝딱뚝딱 무엇이든 만들어내는 열정과 능력을 바탕으로
          도전적인 프로젝트에도 적극적으로 참여하고 있습니다. 끊임없이 발전하고
          성장하는 개발자로서 더욱 멋진 서비스를 만들어내기 위해 노력하고
          있습니다. 감사합니다!
        </p>
      </div>
    </article>
  );
}
