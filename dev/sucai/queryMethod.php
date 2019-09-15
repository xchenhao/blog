<?php
/*
第一种方法：
$psObjs = Poststatus::find()->all();
$allStatus = ArrayHelper::map($psObjs,'id','name');

第二种方法：
$psArray = Yii::$app->db->createCommand('select id,name from poststatus')->queryAll();
$allStatus = ArrayHelper::map($psArray,'id','name');

第三种方法：
$allStatus = (new \yii\db\Query())
->select(['name','id'])
->from('poststatus')
->indexBy('id')
->column();

第四种方法：
allStatus = Poststatus::find()
->select(['name','id'])
->orderBy('position')
->indexBy('id')
->column();

*/
