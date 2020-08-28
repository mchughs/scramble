(ns scrambler.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.util.response :as response]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [scrambler.utils :as utils]))

(defroutes app-routes
  (GET "/" [] "Server is running.")
  (GET "/scramble" {:keys [params] :as request}
    (let [{:keys [s1 s2]} params]
      (if (every? #(and (string? %)
                        (re-matches #"[a-z]*" %))
                  [s1 s2])
        (str (utils/scramble? s1 s2))
        (response/bad-request
         (format "Atleast one of the two input strings, s1: %s s2: %s, didn't conform."
           (pr-str s1)
           (pr-str s2))))))
  (route/not-found "Not Found"))

(def app
  (-> app-routes
   (wrap-defaults site-defaults)
   (wrap-cors :access-control-allow-origin [#".*"]
              :access-control-allow-methods [:get]
              :access-control-allow-headers #{"accept"
                                              "accept-encoding"
                                              "accept-language"
                                              "authorization"
                                              "content-type"
                                              "origin"})))
