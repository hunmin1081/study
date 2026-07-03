// 통계 데이터 상수 단일 관리
// 추후 원본 확보 시 여기만 수정하면 전체 페이지에 반영됨

const STATS = {
  // 건설업 안전 통계
  construction_death_ratio: 39.7,  // 전체 산업재해 사망자 중 건설업 비율 (%)
  total_deaths_2024: 827,           // 2024년 총 산업재해 사망자
  construction_deaths_2024: 328,     // 2024년 건설업 사망자

  // 사고사망만인율
  construction_fatality_rate: 1.57,  // 건설업 사고사망만인율
  industry_avg_fatality_rate: 0.39,  // 산업 평균 사고사망만인율
  fatality_rate_multiple: 4,          // 건설업이 산업평균 대비 배수

  // 연구과제 정보 (플레이스홀더)
  // TODO: 실제 정보로 교체
  project_name: '멀티모달 AI와 몰입형 AR·VR 기반 차세대 개인 맞춤형 건설안전 솔루션',
  research_code: '[NRF 과제 번호 미확정]',
  research_year: '[연도 미확정]',
  research_period: '[2024~2026] 또는 실제 기간',

  // 연구 기관 정보 (플레이스홀더)
  institution: '[연구기관명]',
  principal_investigator: '[연구책임자명]',
  contact_email: '[contact@example.com]',
  contact_phone: '[+82-2-000-0000]'
};

// 통계 계산식 (필요 시)
function calculateRiskIncrease(industry_rate, avg_rate) {
  return (industry_rate / avg_rate).toFixed(1);
}

// Export (필요 시 모듈로 사용)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STATS, calculateRiskIncrease };
}
