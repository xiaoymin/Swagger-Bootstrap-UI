/*
 * Copyright (C) 2018 Zhejiang xiaominfo Technology CO.,LTD.
 * All rights reserved.
 * Official Web Site: http://www.xiaominfo.com.
 * Developer Web Site: http://open.xiaominfo.com.
 */

package com.github.xiaoymin.knife4j.data.impl;


import com.github.xiaoymin.knife4j.aggre.core.common.RouteRepositoryEnum;
import com.github.xiaoymin.knife4j.aggre.spring.configuration.Knife4jAggregationProperties;
import com.github.xiaoymin.knife4j.aggre.spring.support.EurekaSetting;
import com.github.xiaoymin.knife4j.core.GlobalDesktopManager;

import java.io.File;

/**
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2020/12/12 15:34
 * @since:knife4j-aggregation-desktop 1.0
 */
public class EurekaMetaDataResolver extends AbstractMetaDataResolver{

    @Override
    public void resolverModifyAndCreate(File file) {
        String code=file.getName();
        String eurekaProperties=file.getAbsolutePath()+File.separator+ GlobalDesktopManager.EUREKA_PROPERTIES;
        File eurekaFile=new File(eurekaProperties);
        if (eurekaFile.exists()){
            Knife4jAggregationProperties knife4jAggregationProperties=loadFromProperties(eurekaFile);
            if (knife4jAggregationProperties!=null&&knife4jAggregationProperties.getEureka()!=null){
                EurekaSetting eurekaSetting=knife4jAggregationProperties.getEureka();
                if (eurekaSetting!=null){
                    eurekaSetting.setBasic(knife4jAggregationProperties.getBasicAuth());
                    GlobalDesktopManager.me.getEurekaRepository().add(code,eurekaSetting);
                    GlobalDesktopManager.me.addRepositoryType(code, RouteRepositoryEnum.EUREKA);
                }
            }
        }
    }
}
