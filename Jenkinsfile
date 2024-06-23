pipeline {
    agent any
    stages {
            stage('checkout') {
                steps {
                git url: "https://github.com/vamshireddy24/varasiddha"
            }
            }
            stage('Mvn-Build') {
                steps {
                    def mavenHome = tool "maven"
                    def mavenCMD = "${mavenHome}/bin/mvn"
                    sh "${mavenCMD} clean package"
                }
            }
        }
    stages {
            stage('Sonar-Test') {
                steps {
                withSonarQubeEnv('mysonar')
                    {
                    def mavenHome = tool "maven"
                    def mavenCMD = "${mavenHome}/bin/mvn"
                    sh "${mavenCMD} sonar:sonar"
                }
            }
        }
    }
}
