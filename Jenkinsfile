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
        // stage('Sonar-Test') {
        //     environment {
        //         SONAR_URL = "http://localhost:9000"
        //     }
        //     steps {
        //         script {
        //             withCredentials([string(credentialsId: 'sonarqube', variable: 'SONAR_AUTH_TOKEN')]) {
        //             sh 'mvn sonar:sonar -Dsonar.login=$SONAR_AUTH_TOKEN -Dsonar.host.url=${SONAR_URL}'
        //             }
        //         }
        //     }
        // }
        stage('Build and Push Docker Image') {
            environment {
                DOCKER_IMAGE = "kubevamshi/varasiddha:${BUILD_NUMBER}"
                REGISTRY_CREDENTIALS = credentials('docker-cred')
            }
            steps {
                script {
                    sh 'docker build -t ${DOCKER_IMAGE} .'
                    def dockerImage = docker.image("${DOCKER_IMAGE}")
                    docker.withRegistry('https://index.docker.io/v1/', "docker-cred") {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
//         stage('Update Deployment File') {
//         environment {
//             GIT_REPO_NAME = "varasiddha"
//             GIT_USER_NAME = "vamshireddy24"
//         }
//             steps {
//                 withCredentials([string(credentialsId: 'github', variable: 'GITHUB_TOKEN')]) {
//                     sh '''
//                         git config user.email "chvamshikrishna24@gmail.com"
//                         git config user.name "vamshireddy24"
//                         BUILD_NUMBER=${BUILD_NUMBER}
//                         sed -i "s/replaceImageTag/${BUILD_NUMBER}/g" argocd-kube/deployment.yml
//                         git add argocd-kube/deployment.yml
//                         git commit -m "Update deployment image to version ${BUILD_NUMBER}"
//                         git push https://${GITHUB_TOKEN}@github.com/${GIT_USER_NAME}/${GIT_REPO_NAME} HEAD:main
//                     '''
//                 }
//             }
//         }
//     }
// }
        // stage('Build Docke Image') {
         //       environment {
           //         DOCKER_IMAGE = "kubevamshi/varasiddha:${BUILD_NUMBER}"
             //       REGISTRY_CREDENTIALS = credentials('docker-cred')
               //     }
           // steps {
             //   script {
               //     sh 'docker build -t ${DOCKER_IMAGE} .'
                 //       def dockerImage = docker.image("${DOCKER_IMAGE}")
              //  }
            //}
      //  }

        //stage('Security Scan with Trivy') {
            //environment {
              //  TRIVY_SNAP_FILE = '/var/lib/snapd/snaps/trivy_276.snap'
             //   TRIVY_MOUNT_POINT = '/snap/trivy/276'
             //   user = 'root'
               // args '--user root -v /var/lib/snapd/snaps/trivy_276.snap:/var/lib/snapd/snaps/trivy_276.snap'
            //}
            //steps {
                //script {
                    // Run Trivy scan
                    // sh "sudo umount ${TRIVY_MOUNT_POINT}"
                    //trivyOutput = sh 'sudo docker run --rm -v /home/ubuntu/trivy/:/root/.cache/ aquasec/trivy:0.52.2 image ${DOCKER_IMAGE}'
                    //def trivyOutput = sh(script: "trivy --exit-code 0 --severity HIGH --format json ${DOCKER_IMAGE}", returnStdout: true).trim()
                    //echo "Trivy scan results:\n${trivyOutput}"
                //}
            //}
        //}
        //stage('Push to Docker Hub') {
          //  steps {
            //    script {
                    // Docker login to Docker Hub
              //      docker.withRegistry('https://index.docker.io/v1/', "docker-cred") {
                //        dockerImage.push()
