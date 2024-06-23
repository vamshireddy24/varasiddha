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
        }
}
