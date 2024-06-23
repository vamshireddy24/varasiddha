pipeline {
    agent any
    stages {
        stage('checkout') {
            steps {
                sh 'echo passed'
                // git branch: 'main', url: "https://github.com/vamshireddy24/varasiddha.git"
            }
        }
        stage('Mvn-Build') {
            steps {
                script {
                    def mavenHome = tool name: "maven", type: "maven"
                    def mavenCMD = "${mavenHome}/bin/mvn"
                    sh "${mavenCMD} clean package"
                    }
            }
        }
        stage('Sonar-Test') {
            environment {
                SONAR_URL = "http://localhost:9000"
            }
            steps {
                script {
                    withCredentials([string(credentialsId: 'sonarqube', variable: 'SONAR_AUTH_TOKEN')]) {
                    sh 'mvn sonar:sonar -Dsonar.login=$SONAR_AUTH_TOKEN -Dsonar.host.url=${SONAR_URL}'
                    }
                }
            }
        }
        stage('Build Docke Image') {
                environment {
                    DOCKER_IMAGE = "kubevamshi/varasiddha:${BUILD_NUMBER}"
                    REGISTRY_CREDENTIALS = credentials('docker-cred')
                    }
            steps {
                script {
                    sh 'docker build -t ${DOCKER_IMAGE} .'
                        def dockerImage = docker.image("${DOCKER_IMAGE}")
                }
            }
        }
        stage('Security Scan with Trivy') {
            steps {
                script {
                    // Run Trivy scan
                    def trivyOutput = sh(script: "trivy --exit-code 0 --severity HIGH --format json ${DOCKER_IMAGE}", returnStdout: true).trim()
                    echo "Trivy scan results:\n${trivyOutput}"
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    // Docker login to Docker Hub
                    docker.withRegistry('https://index.docker.io/v1/', "docker-cred") {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
