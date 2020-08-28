(defproject scramble-server "0.1.0-SNAPSHOT"
  :description "My Scramble Web Server"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [compojure "1.6.1"]
                 [ring-cors "0.1.13"]
                 [ring/ring-core "1.8.1"]
                 [ring/ring-defaults "0.3.2"]]
  :plugins [[lein-ring "0.12.5"]]
  :ring {:handler scrambler.handler/app
         :port 4000}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.2"]]}})
