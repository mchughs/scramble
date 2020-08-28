(ns scrambler.ui
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [reagent.core :as reagent :refer [atom]]))

(def ^:private port 4000) ;; Also established in project.clj

(defn- on-submit [error result e]
  (.preventDefault e)
  (let [s1 (.-value (.getElementById js/document "scrabble-hand"))
        s2 (.-value (.getElementById js/document "target"))]
    (go
     (let [{:keys [body status]}
           (<! (http/get (str "http://localhost:" port "/scramble")
                         {:with-credentials? false
                          :query-params {:s1 s1 :s2 s2}}))]
       (if (= 200 status)
         (reset! result body)
         (reset! error  body))))))

(defn component []
  (reagent/with-let [result (atom nil)
                     error  (atom nil)]
    [:div
     [:h1 "Will it scramble?"]
     [:h3 "You may only use characters from a-z, lowercase."]
     [:form {:accept-charset "ISO-8859-1"
             :onSubmit (partial on-submit error result)
             :onChange #(do (reset! result nil)
                            (reset! error nil))}
      [:label {:for "scrabble-hand"}
       "Your Scrabble Tiles:"]
      [:br]
      [:input {:type "text"
               :pattern "[a-z]*"
               :id "scrabble-hand"
               :name "scrabble-hand"
               :defaultValue "rekqodlw"}]
      [:br]
      [:label {:for "target"}
       "Target Word:"]
      [:br]
      [:input {:type "text"
               :pattern "[a-z]*"
               :id "target"
               :name "target"
               :defaultValue "world"}]
      [:br]
      [:input {:type "submit"
               :value "Submit"}]
      (when @error
        [:div "Oops, the following problem occured with our server: "
              (pr-str @error) "."
              " Check that the server is running!"])
      (when @result
        [:div "The answer is... " @result "!"])]]))
