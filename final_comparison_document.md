# AWS, GCP, Azure 서비스 카테고리 분류 체계 비교

## 개요

이 문서는 세 주요 클라우드 서비스 제공업체(CSP)인 Amazon Web Services(AWS), Google Cloud Platform(GCP), Microsoft Azure의 서비스 분류 체계를 비교 분석한 결과입니다. 각 CSP가 자사의 클라우드 서비스를 어떻게 대분류/중분류/소분류로 구성하여 제공하는지 비교하여 살펴봅니다.

## 대분류 카테고리 비교

세 CSP는 서비스를 분류하는 방식에 있어 유사점과 차이점을 보입니다. 아래 표는 주요 서비스 영역별로 각 CSP의 대분류 카테고리를 비교한 것입니다.

| 서비스 영역 | AWS | GCP | Azure |
|------------|-----|-----|-------|
| 컴퓨팅 | 컴퓨팅 | 컴퓨팅 | Compute |
| 스토리지 | 스토리지 | 스토리지 | Storage |
| 데이터베이스 | 데이터베이스 | 데이터베이스 | Databases |
| 네트워킹 | 네트워킹 및 콘텐츠 전송 | 네트워킹 | Networking |
| 분석 | 분석 | 데이터 분석 | Analytics |
| AI/ML | Machine Learning(ML) 및 인공 지능(AI) | AI 및 머신러닝 | AI + Machine Learning |
| 개발자 도구 | 개발자 도구 | 개발자 도구 | Developer Tools |
| 관리 및 거버넌스 | 관리 및 거버넌스 | 관리 도구 | Management and Governance |
| 보안 | 보안, 자격 증명 및 규정 준수 | 보안 | Security |
| 통합 | 애플리케이션 통합 | 통합 서비스 | Integration |
| 컨테이너 | 컨테이너 | 컨테이너 | Containers |
| IoT | 사물 인터넷(IoT) | IoT | Internet of Things |
| 미디어 | 미디어 | 미디어 | Media |
| 마이그레이션 | 마이그레이션 및 전송 | 마이그레이션 | Migration |
| 비즈니스 애플리케이션 | 비즈니스 애플리케이션 | 비즈니스 인텔리전스 | 비즈니스 애플리케이션(추정) |

## 각 CSP별 고유 카테고리

각 CSP는 자사의 강점이나 특화 영역을 반영하는 고유한 서비스 카테고리를 가지고 있습니다.

### AWS 고유 카테고리
- 블록체인
- 로봇
- 양자 기술
- 위성
- 게임 기술
- 클라우드 재무 관리
- 고객 활성화

### GCP 고유 카테고리
- 업종별
- 분산 클라우드

### Azure 고유 카테고리
- Mixed reality
- Web (별도 카테고리로 분류)
- Identity (별도 카테고리로 분류)
- DevOps (별도 카테고리로 분류)

## 서비스 분류 체계 특징 비교

### AWS 서비스 분류 체계 특징
- 가장 많은 수의 대분류 카테고리(24개)를 보유
- 세분화된 서비스 카테고리로 구체적인 사용 사례에 맞춘 분류
- 미래 기술(양자 컴퓨팅, 로봇, 위성 등)을 별도 카테고리로 분류
- 재무 관리를 별도의 대분류 카테고리로 구분하여 비용 최적화 강조
- 블록체인과 같은 특화 기술을 별도 카테고리로 분류

### GCP 서비스 분류 체계 특징
- 상대적으로 간결한 대분류 카테고리(13개)
- 업종별 카테고리를 통해 산업 특화 솔루션 강조
- 분산 클라우드 카테고리를 통해 하이브리드/멀티 클라우드 전략 강조
- 데이터 분석과 AI에 중점을 둔 분류 체계
- 비즈니스 인텔리전스를 별도 카테고리로 분류하여 데이터 기반 의사결정 강조

### Azure 서비스 분류 체계 특징
- 중간 수준의 대분류 카테고리(21개)
- DevOps를 별도 카테고리로 분류하여 개발 및 운영 통합 강조
- Identity를 별도 카테고리로 분류하여 보안 및 ID 관리 강조
- Mixed reality와 같은 차별화된 기술 영역 포함
- Web을 별도 카테고리로 분류하여 웹 애플리케이션 개발 강조

## 주요 서비스 영역별 비교

### 컴퓨팅 서비스

| 서비스 유형 | AWS | GCP | Azure |
|------------|-----|-----|-------|
| 가상 머신 | Amazon EC2 | Compute Engine | Azure Virtual Machines |
| 서버리스 컴퓨팅 | AWS Lambda | Cloud Functions | Azure Functions |
| 컨테이너 오케스트레이션 | Amazon EKS | Google Kubernetes Engine | Azure Kubernetes Service |
| 컨테이너 서비스 | AWS Fargate | Cloud Run | Azure Container Instances |
| PaaS | AWS Elastic Beanstalk | App Engine | Azure App Service |

### 스토리지 서비스

| 서비스 유형 | AWS | GCP | Azure |
|------------|-----|-----|-------|
| 객체 스토리지 | Amazon S3 | Cloud Storage | Azure Blob Storage |
| 블록 스토리지 | Amazon EBS | Persistent Disk | Azure Disk Storage |
| 파일 스토리지 | Amazon EFS | Filestore | Azure Files |
| 아카이브 스토리지 | Amazon S3 Glacier | Cloud Storage Archive | Azure Archive Storage |

### 데이터베이스 서비스

| 서비스 유형 | AWS | GCP | Azure |
|------------|-----|-----|-------|
| 관계형 데이터베이스 | Amazon RDS | Cloud SQL | Azure SQL Database |
| NoSQL 데이터베이스 | Amazon DynamoDB | Firestore | Azure Cosmos DB |
| 인메모리 데이터베이스 | Amazon ElastiCache | Memorystore | Azure Cache for Redis |
| 데이터 웨어하우스 | Amazon Redshift | BigQuery | Azure Synapse Analytics |

### AI 및 머신러닝 서비스

| 서비스 유형 | AWS | GCP | Azure |
|------------|-----|-----|-------|
| ML 플랫폼 | Amazon SageMaker | Vertex AI Platform | Azure Machine Learning |
| 생성형 AI | Amazon Bedrock | Vertex AI Studio | Azure OpenAI Service |
| AI 에이전트 | Amazon Q | Vertex AI Agent Builder | Azure AI Studio |
| 대규모 언어 모델 | Amazon Titan | Gemini | Azure OpenAI |

## 분류 체계의 차이점 분석

### 명명 규칙 차이
- AWS: 'Amazon' 또는 'AWS' 접두사를 사용하여 서비스 명명
- GCP: 'Cloud'나 'Google' 접두사를 사용하거나 기능 중심 명명(예: BigQuery)
- Azure: 'Azure'를 접두사로 사용하거나 기능 중심 명명

### 분류 깊이 차이
- AWS: 대분류-중분류-소분류의 3단계 분류 체계가 가장 명확
- GCP: 대분류-중분류 중심의 2단계 분류 체계가 주로 사용됨
- Azure: 대분류-중분류 중심이지만 일부 영역에서 3단계 분류 사용

### 서비스 그룹화 방식 차이
- AWS: 기술 유형과 사용 사례를 모두 고려한 혼합 분류 방식
- GCP: 기술 유형 중심의 분류와 업종별 분류를 병행
- Azure: 기술 유형 중심의 분류가 주를 이루며 개발 단계별 분류도 고려(DevOps)

## 결론

세 클라우드 서비스 제공업체는 각자의 전략과 강점을 반영한 서비스 분류 체계를 가지고 있습니다. AWS는 가장 세분화된 분류 체계와 미래 기술 카테고리를 통해 포괄적인 서비스 포트폴리오를 강조합니다. GCP는 데이터 분석과 AI에 중점을 둔 간결한 분류 체계를 통해 데이터 중심 접근 방식을 보여줍니다. Azure는 개발자 경험과 엔터프라이즈 통합에 초점을 맞춘 분류 체계를 통해 기업 환경에 대한 이해를 반영합니다.

이러한 분류 체계의 차이는 각 CSP의 전략적 방향과 우선순위를 이해하는 데 도움이 되며, 조직의 요구사항에 가장 적합한 클라우드 서비스 제공업체를 선택하는 데 참고할 수 있습니다.
