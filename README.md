# Next.js 프로젝트 ECR 업로드 및 EKS 배포

Next.js 프로젝트를 AWS ECR(Elastic Container Registry)에 업로드하고, AWS EKS(Elastic Kubernetes Service)에 배포

## 1. 개요

Next.js 프로젝트를 컨테이너화하여 AWS의 ECR에 저장한 후, 이를 EKS 클러스터에 배포

## 2. 주요 구성 요소

* **Next.js 애플리케이션**: 컨테이너화하여 배포할 웹 애플리케이션
* **Docker**: 컨테이너 빌드 및 실행을 위한 도구 
* **AWS ECR**: Docker 이미지를 저장하는 AWS 서비스
* **AWS EKS**: 컨테이너 오케스트레이션을 위한 AWS 서비스
* **kubectl**: Kubernetes 클러스터 관리를 위한 CLI 도구
* **eksctl**: AWS EKS 클러스터를 쉽게 설정하는 CLI 도구

## 3. 프로젝트 진행 과정

### 3.1. Next.js 애플리케이션 컨테이너화

Next.js 애플리케이션을 Docker 기반으로 컨테이너화하여 ECR에 업로드할 수 있도록 설정합니다.

### 3.2. AWS ECR에 이미지 업로드

1. AWS ECR에서 새로운 리포지토리를 생성합니다.
2. Docker 이미지를 빌드하고 태깅한 후, AWS ECR에 푸시합니다.

### 3.3. AWS EKS 클러스터 설정

1. `eksctl`을 사용하여 새로운 EKS 클러스터를 생성합니다.
2. IAM 역할과 권한을 설정하여 EKS가 ECR에서 이미지를 가져올 수 있도록 구성합니다.

### 3.4. Kubernetes 리소스 배포

1. Next.js 애플리케이션을 실행할 **Deployment** 리소스를 생성합니다.
2. 클러스터 내에서 애플리케이션을 노출하는 **Service** 리소스를 설정합니다.
3. 필요에 따라 Ingress를 구성하여 도메인을 연결할 수 있습니다.

### 3.5. 배포 확인

배포가 정상적으로 완료되었는지 확인하고, 서비스가 정상적으로 실행되는지 테스트합니다.

## 4. 기대 효과

* **자동 확장 지원**: 트래픽 증가에 따라 자동으로 인스턴스를 조절할 수 있습니다.
* **운영 효율성 증대**: Kubernetes를 통해 배포 및 관리를 자동화할 수 있습니다.
* **안정적인 배포**: 롤링 업데이트를 지원하여 무중단 배포가 가능합니다.
